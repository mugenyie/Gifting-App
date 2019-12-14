import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Footer, FooterTab, Content } from 'native-base';

import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import { connect } from 'react-redux';

import GiftBoxItems from '../../components/GiftBoxItems';


// create a component
class GiftBoxScreen extends Component {
_renderNoItems = (<View style={{flex:1,flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                    <Text style={mainStyles.Heading3}>Your GiftBox is empty</Text>
                    <Button onPress={() => this.props.navigation.navigate("Home")} transparent 
                    style={{marginTop:20, width:150,justifyContent:"center",alignContent:"center", 
                    flexDirection:"row",borderColor:Color.primaryDark,borderWidth:0.5,borderRadius:2,padding:4}}>
                        <Icon name='gift' size={18} color={Color.primaryDark}/>
                        <Text style={[mainStyles.TextRegular,{paddingLeft:8}]}>Start shopping</Text>
                    </Button>
                    </View>);

_renderCartItems = () => (<GiftBoxItems {...this.props} onPress={this.props.removeItem} products={this.props.giftBoxItems}/>);

_sumTotal = (items) => {
    var sum = 0;
    for(var i =0; i < this.props.giftBoxItems.length; i++) {
        var item = items[i];
        sum = sum + parseFloat(item.price);
    }
    return sum;
}

    render() {
        return (
            <Container style={{flex:1}}>
            <Header style={{backgroundColor:"#fff",paddingBottom:4,paddingTop:2,height:50}}>
                <Left>
                    <Button onPress={() => this.props.navigation.navigate("Home")} transparent>
                        <Icon name='close' size={22} color={Color.primaryDark}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={[{color:Color.primaryDark},mainStyles.Heading2]}>GiftBox</Title>
                </Body>
                <Right>

                </Right>
            </Header>

            {this.props.giftBoxItems.length > 0 ? this._renderCartItems() : this._renderNoItems}

            <Footer style={{height:90,elevation:10,borderTopColor:'#CCC',borderTopWidth:0.2}}>
                <FooterTab style={{backgroundColor:'#FFF'}}>
                    <View style={{flexDirection:'column',flex:1,marginLeft:10,marginRight:10,height:70}}>
                        <View style={{flex:1,flexDirection:'row', paddingTop:5,}}>
                            <Text style={[mainStyles.TextRegular],{fontWeight:'bold'}}>Total:</Text>
                            <Text style={[mainStyles.TextRegular],{marginLeft:'50%'}}>Ugshs. {this._sumTotal(this.props.giftBoxItems)}</Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <Button transparent onPress={() => this.props.navigation.navigate("Home")} 
                            style={{borderColor:Color.primaryDark,borderWidth:0.5,borderRadius:2,paddingLeft:8,paddingRight:8,width:'40%'}}>
                                <Text style={[mainStyles.Heading3,{textAlign:'center', fontSize: 15}]}>Keep Shopping</Text>
                            </Button>

                            <Button onPress={() => this.props.navigation.navigate("Checkout")} 
                            style={{backgroundColor:Color.primaryDark,paddingLeft:8,paddingRight:8,width:'50%',marginLeft:'2%'}}>
                                <Text style={[mainStyles.Heading3,{color:'#FFF', textAlign:'center', fontSize: 14}]}>SECURE CHECKOUT</Text>
                            </Button>
                        </View>
                    </View>
                </FooterTab>
            </Footer>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        giftBoxItems : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(GiftBoxScreen);
