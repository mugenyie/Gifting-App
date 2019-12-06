import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Footer, FooterTab, Content } from 'native-base';

import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';

// create a component
class GiftBoxScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container style={{flex:1}}>
            <Header style={{backgroundColor:"#fff",paddingBottom:4,paddingTop:2,height:50}}>
                <Left>
                    <Button onPress={() => navigate("Home")} transparent>
                        <Icon name='close' size={22} color={Color.primaryDark}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={[{color:Color.primaryDark},mainStyles.Heading2]}>GiftBox</Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <Content style={{flex:1}}>
                <ScrollView style={{flex:1}}>
                    <View style={{justifyContent:'center', alignItems: 'center', alignContent:'center', marginTop: '50%', marginBottom:'10%'}}>
                    <Text style={[mainStyles.Heading4,{padding:10}]}>Your GiftBox is empty</Text>
                        <Button onPress={() => this.props.navigation.navigate('Home')} style={{borderRadius: 4, backgroundColor:Color.primaryDark, justifyContent:'center',width:'50%',height:50}}>
                            <Text style={[{color:'#FFF'},mainStyles.Heading3,{fontSize:15}]}>Return to shopping</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Content>
            <Footer style={{height:90}}>
                <FooterTab style={{backgroundColor:'#FFF'}}>
                    {/* <Text style={[mainStyles.ProductPriceText,{fontSize:16, color:Color.primaryDark, flex:1, flexDirection:'column'}]}>Total: UGX 19,500</Text> */}
                    <Button style={{flex:1,width:'100%'}} vertical transparent>
                        <View style={{flexDirection:'row',paddingBottom:4}}>
                            <Text  style={[mainStyles.TextRegular,{color:'#000'}]}>Total</Text>
                            <Text style={[mainStyles.TextRegular,{color:'#000',fontWeight:'bold'}]}> 0</Text>
                        </View>
                        <Button onPress={() => alert("Thank you!")} style={{flex:1,alignSelf:'center', borderRadius: 4, backgroundColor:Color.primaryDark, justifyContent:'center', alignItems: 'center', width:'90%', marginBottom:4}}>
                            <Text style={[mainStyles.Heading3,{color:'#FFF', textAlign:'center', fontSize: 15}]}>SECURE CHECKOUT</Text>
                        </Button>
                    </Button>
                </FooterTab>
            </Footer>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default GiftBoxScreen;
