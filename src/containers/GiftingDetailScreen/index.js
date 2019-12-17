import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Title, Footer, FooterTab, Content } from 'native-base';

import {RaveWebView} from '../../components/RaveCheckout';
import { GetUserData } from '../../services/UserAuthManager';
import Config from '../../common/Config';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';


// create a component
class GiftingDetailScreen extends Component {
    
    state = {
        amount: 0,
        user: null,
        displayName: "",
        email: "",
        phone: "",
        giftBox: null,
        giftBoxMeta: "",
        productCustomisation: "",
        giftMessage: "",
        fromName: "",
        recipientName: "",
        recipientContact: "",
        recipientAddress: ""      
    }

    async componentDidMount(){
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                this.setState({ user: userInfo, displayName: userInfo.displayName, email: userInfo.email, phone: userInfo.phone })
            }else{
                // Lock out the user
            }
        })
        .catch(error => {
            alert(error);
        });

        this.setState({
            giftBox: this.props.giftBoxItems,
            giftBoxMeta: this._getProduct(this.props.giftBoxItems),
            amount: this._sumTotal(this.props.giftBoxItems)
        })
        
    }


    onSuccess(data) {
    alert("Payment Success");
    // You get the complete response returned from FlutterWave,
    // just incase you need more than the reference number

    }

    onCancel() {
        alert('Transaction cancelled');
    }

    onError() {
    //an error occoured
        alert('Payment processing error');
    }

    uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    _sumTotal = (items) => {
        var sum = 0;
        for(var i =0; i < this.props.giftBoxItems.length; i++) {
            var item = items[i];
            sum = sum + parseFloat(item.price);
        }
        return sum;
    }

    _getProduct = (items) => {
        let productString = "";
        for(var i =0; i < this.props.giftBoxItems.length; i++) {
            var item = items[i];
            productString = productString + item.id + " , ";
        }
        return productString;
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Header style={{backgroundColor:"#fff",paddingBottom:4,paddingTop:2,height:50}}>
                <Left>
                    <Button onPress={() => this.props.navigation.navigate("GiftBox")} transparent>
                        <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={[{color:Color.primaryDark},mainStyles.Heading2]}>Gifting Detail</Title>
                </Body>
                <Right>

                </Right>
            </Header>

            <Content>
                <ScrollView
                style={{flex:1}}
                showsVerticalScrollIndicator={false}
                >
                <View style={{marginLeft:10,marginRight:10, marginTop:20, marginBottom:50}}>

                    <Text style={[styles.inputlabel,{marginBottom:5,fontSize:20}]}>Gift Customisation Instructions</Text>
                    <TextInput
                    style={{borderWidth:1,borderColor:"#CCC", borderRadius:4,fontSize:16,
                    color:'#555'}}
                    multiline={true}
                    numberOfLines={2}
                    value={this.state.productCustomisation}
                    onChangeText={productCustomisation => {
                        this.setState({ productCustomisation })
                    }}/>


                    <Text style={[styles.inputlabel,{marginBottom:5,fontSize:20}]}>Gift Message</Text>
                    <TextInput
                    style={{borderWidth:1,borderColor:"#CCC", borderRadius:4,fontSize:16,
                    color:'#555'}}
                    multiline={true}
                    numberOfLines={6}
                    value={this.state.giftMessage}
                    onChangeText={giftMessage => {
                        this.setState({ giftMessage })
                    }}/>
                    <Text style={[mainStyles.TextRegular,{fontSize:14,marginBottom:10,marginTop:5}]}>
                        The message will be written on the gift note to the recipient
                    </Text>

                    <Text style={styles.inputlabel}>
                        <Text>From </Text>
                    </Text>
                    <TextInput
                    value={this.state.displayName}
                    onChangeText={displayName => {
                        this.setState({ displayName })
                    }}
                    style={styles.inputContainer}
                    />

                    <Text style={styles.inputlabel}>
                        <Text>Recipient's name</Text>
                    </Text>
                    <TextInput
                    placeholder="Recipient's name"
                    value={this.state.recipientName}
                    onChangeText={recipientName => {
                        this.setState({ recipientName })
                    }}
                    style={styles.inputContainer}
                    />

                    <Text style={styles.inputlabel}>
                        <Text>Recipient's contact</Text>
                    </Text>
                    <TextInput
                    placeholder="Recipient's contact"
                    value={this.state.recipientContact}
                    onChangeText={recipientContact => {
                        this.setState({ recipientContact })
                    }}
                    style={styles.inputContainer}
                    />

                    <Text style={styles.inputlabel}>
                        <Text>Recipient's delivery address</Text>
                    </Text>
                    <TextInput
                    placeholder="Recipient's address"
                    value={this.state.recipientAddress}
                    onChangeText={recipientAddress => {
                        this.setState({ recipientAddress })
                    }}
                    style={styles.inputContainer}
                    />    
                </View>
                </ScrollView>
            </Content>

            <Footer style={{height:100,elevation:10,borderTopColor:'#CCC',borderTopWidth:0.2}}>
                <FooterTab style={{backgroundColor:'#FFF'}}>
                    <View style={{flexDirection:'column',flex:1,marginLeft:10,marginRight:10,height:70}}>
                        <View style={{flex:1,flexDirection:'row', paddingTop:10,marginBottom:10}}>
                            <Text>
                                <Text style={[mainStyles.Heading2Light,{fontSize:16}]}>Total: </Text>
                                <Text style={[mainStyles.Heading2Light,{fontSize:16}]}> UShs. {this.state.amount}</Text>
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <RaveWebView
                            buttonText="SECURE CHECKOUT"
                            raveKey={Config.RavePublicKey}
                            amount={this.state.amount}
                            customerEmail={this.state.email}
                            customerPhone={this.state.phone}
                            giftBoxMeta={this.state.giftBoxMeta}
                            productCustomisation = {this.state.productCustomisation}
                            giftMessage = {this.state.giftMessage}
                            fromName = {this.state.displayName}
                            recipientName = {this.state.recipientName}
                            recipientContact = {this.state.recipientContact}
                            recipientAddress = {this.state.recipientAddress}
                            ActivityIndicatorColor={Color.primaryDark}
                            onCancel={this.onCancel}
                            onSuccess={this.onSuccess}
                            onError={() => { alert('something went wrong') }}
                            btnStyles={{backgroundColor:Color.primaryDark,width:'100%', height:45,borderRadius:4,elevation:4}}
                            textStyles={[mainStyles.Heading3,{color:'#FFF', textAlign:'center', fontSize: 15,padding:15}]}
                            txref={this.uuidv4()}
                            />
                        </View>
                    </View>
                </FooterTab>
            </Footer>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    inputContainer: {
        borderBottomWidth:1,
        borderBottomColor:"#CCC",
        fontSize:22,
        color:'#555'
    },
    inputlabel: {
        fontSize:15,
        fontFamily:'OpenSans-Regular',
        marginTop:20,
        color:'#333'
    }
});

const mapStateToProps = (state) => {
    return {
        giftBoxItems : state
    }
}

//make this component available to the app
export default connect(mapStateToProps)(GiftingDetailScreen);