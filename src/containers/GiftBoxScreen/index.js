import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import { Container, Header, Left, Body, Right, Button, Title, Footer, FooterTab, Content } from 'native-base';

import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import { connect } from 'react-redux';

import GiftBoxItems from '../../components/GiftBoxItems';

// create a component
class GiftBoxScreen extends Component {

    state = {
        giftBoxEmpty: true
    }

    componentDidMount(){
        this.setState({giftBoxEmpty: this.props.giftBoxItems.length > 0 ? false : true})
    }

    _renderNoItems = () => {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={mainStyles.Heading3}>Your GiftBox is empty</Text>
                <Button onPress={() => this.props.navigation.goBack()} transparent 
                style={{marginTop:20, width:150,justifyContent:"center",alignContent:"center", 
                flexDirection:"row",borderColor:Color.primaryDark,borderWidth:0.5,borderRadius:2,padding:4}}>
                    <Icon name='gift' size={18} color={Color.primaryDark}/>
                    <Text style={[mainStyles.TextRegular,{paddingLeft:8}]}>Start shopping</Text>
                </Button>
            </View>
        )
    }
    
    _renderCartItems = () => {
        return (
            <GiftBoxItems {...this.props} onPress={this.props.removeItem} products={this.props.giftBoxItems}/>
        )
    }
    
    _sumTotal = (items) => {
        var sum = 0;
        for(var i =0; i < this.props.giftBoxItems.length; i++) {
            var item = items[i];
            sum = sum + parseFloat(item.price);
        }
        return sum;
    }

    render() {
        const {giftBoxItems, giftBoxEmpty} = this.props;
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


            {
                giftBoxItems.length > 0 ?
                <ScrollView
                style={{flex:1}}
                showsVerticalScrollIndicator={false}
                >

                    {this._renderCartItems()}
                    
                    <View style={{marginBottom:50}}/>
                </ScrollView>
                : this._renderNoItems()
            }

            {
                giftBoxItems.length > 0 ? 
                <View>
                    <Footer style={{height:100,elevation:10,borderTopColor:'#CCC',borderTopWidth:0.2}}>
                        <FooterTab style={{backgroundColor:'#FFF'}}>
                            <View style={{flexDirection:'column',flex:1,marginLeft:10,marginRight:10,height:70}}>
                                <View style={{flex:1,flexDirection:'row', paddingTop:10,marginBottom:10}}>
                                    <Text>
                                        <Text style={[mainStyles.Heading2Light,{fontSize:16}]}>Total: </Text>
                                        <Text style={[mainStyles.Heading2Light,{fontSize:16}]}> UShs. {this._sumTotal(this.props.giftBoxItems)}</Text>
                                    </Text>
                                </View>
                                <View style={{flex:1,flexDirection:'row'}}>
                                    <Button transparent onPress={() => this.props.navigation.navigate("Home")} 
                                    style={{borderColor:Color.primaryDark,borderWidth:0.5,borderRadius:2,paddingLeft:8,paddingRight:8,width:'40%',height:40}}>
                                        <Text style={[mainStyles.Heading3,{textAlign:'center', fontSize: 15}]}>KEEP SHOPPING</Text>
                                    </Button>

                                    <Button onPress={() => this.props.navigation.navigate("GiftingDetail")} 
                                    style={{backgroundColor:Color.primaryDark,paddingLeft:8,paddingRight:8,width:'50%',marginLeft:'2%', height:40}}>
                                        <Text style={[mainStyles.Heading3,{color:'#FFF', textAlign:'center', fontSize: 14}]}>
                                            <Text>GIFTING DETAIL </Text>
                                            <Icon name="arrowright" size={16} color="#FFF" />
                                        </Text>
                                    </Button>
                                </View>
                            </View>
                        </FooterTab>
                    </Footer>
                </View>
                : <View />
            }
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
