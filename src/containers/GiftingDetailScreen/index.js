import React, { Component } from 'react';
import {StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Title, Footer, FooterTab, Content } from 'native-base';

import {priceFormat} from '../../helpers';
import Config from '../../common/Config';
import ConstantsAPI from '../../services/ConstantsAPI';
import OrdersAPI from '../../services/OrdersAPI';

import {RaveWebView} from '../../components/RaveCheckout';
import { GetUserData } from '../../services/UserAuthManager';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';


// create a component
class GiftingDetailScreen extends Component {
    
    state = {
        ravePublicKey: "",
        amount: 0,
        productIds:[],
        user: null,
        displayName: "",
        email: "",
        phone: "",
        giftBox: null,
        giftBoxMeta: "",
        additionalInstruction: "",
        giftMessage: "",
        fromName: "",
        recipientName: "",
        recipientContact: "",
        recipientAddress: "" ,
        shippingCost:10000
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
        .catch(error => alert(error));

        ConstantsAPI.GetConstant(Config.RavePublicKey)
        .then(data => {
            const ravePublicKey = data.body;
            this.setState({ravePublicKey});
        })
        .catch(error => console.log(error))

        this.setState({
            giftBox: this.props.giftBoxItems,
            giftBoxMeta: "-"+this._getProductIds(this.props.giftBoxItems).toString()+"-",
            productIds: this._getProductIds(this.props.giftBoxItems),
            amount: this._sumTotal(this.props.giftBoxItems)
        })
    }

    createOrder = (OrderPayLoad) =>{
        OrdersAPI.Create(OrderPayLoad)
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error))
        this.state = null;
        this.props.clearCart;
        this.props.navigation.navigate("OrderSuccess");
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

    _getProductIds = (items) => {
        let productIds = [];
        for(var i =0; i < this.props.giftBoxItems.length; i++) {
            var item = items[i];
            productIds.push(item.id);
        }
        return productIds;
    }

    render() {
        return (
            <Container>

            <Content>
                <ScrollView
                style={{flex:1}}
                showsVerticalScrollIndicator={false}
                >
                <View style={{marginLeft:10,marginRight:10, marginTop:20, marginBottom:50}}>

                    <Text style={[styles.inputlabel,{marginBottom:5,fontSize:20}]}>
                        <Text>Gift Message </Text>
                        <Text style={[mainStyles.TextRegular,{fontSize:14,marginBottom:10,marginTop:5}]}>
                            {"\n"}(Gift note to the recipient)
                        </Text>
                    </Text>
                    <TextInput
                    style={{borderWidth:1,borderColor:"#CCC",height:100, borderRadius:4,fontSize:16,
                    color:'#555'}}
                    multiline={true}
                    numberOfLines={6}
                    value={this.state.giftMessage}
                    onChangeText={giftMessage => {
                        this.setState({ giftMessage })
                    }}/>
                    

                    <Text style={[styles.inputlabel,{marginBottom:5,fontSize:20}]}>Any Additional Instruction</Text>
                    <TextInput
                    style={{borderWidth:1,borderColor:"#CCC", borderRadius:4,height:100, fontSize:16,
                    color:'#555'}}
                    multiline={true}
                    numberOfLines={2}
                    value={this.state.additionalInstruction}
                    onChangeText={additionalInstruction => {
                        this.setState({ additionalInstruction })
                    }}/>

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
                        <Text>Recipient's name *</Text>
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
                        <Text>Recipient's contact *</Text>
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
                        <Text>Recipient's delivery address *</Text>
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

            <Footer style={{height:120,elevation:10,borderTopColor:'#CCC',borderTopWidth:0.2}}>
                <FooterTab style={{backgroundColor:'#FFF'}}>
                    <View style={{flexDirection:'column',flex:1,marginLeft:10,marginRight:10,height:100}}>
                        <View style={{flex:1,flexDirection:'row', paddingTop:10,marginBottom:10}}>
                            <Text>
                                <Text style={[mainStyles.Heading2Light,{fontSize:15}]}>Total: </Text>
                                <Text style={[mainStyles.Heading2Light,{fontSize:15}]}>{priceFormat(this.state.amount+this.state.shippingCost)}</Text>
                                <Text style={[mainStyles.Heading2Light,{fontSize:13,fontWeight:'bold'}]}>{"\n"}(Inclusive of {priceFormat(this.state.shippingCost)} Shipping Cost & Packaging) </Text>
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <RaveWebView
                            buttonText="SECURE CHECKOUT"
                            raveKey={this.state.ravePublicKey}
                            amount={this.state.amount}
                            customerEmail={this.state.email}
                            customerPhone={this.state.phone}
                            giftBoxMeta={this.state.giftBoxMeta}
                            additionalInstruction = {this.state.additionalInstruction}
                            giftMessage = {this.state.giftMessage}
                            fromName = {this.state.displayName}
                            recipientName = {this.state.recipientName}
                            recipientContact = {this.state.recipientContact}
                            recipientAddress = {this.state.recipientAddress}
                            ActivityIndicatorColor={Color.PrimaryDark}
                            onCancel={this.onCancel}
                            onSuccess={() => this.createOrder({
                                productIds: this.state.productIds,
                                customerId: 1,
                                amountPaid: this.state.amount,
                                giftMessage: this.state.giftMessage,
                                additionalInstruction: this.state.additionalInstruction,
                                senderName: this.state.fromName,
                                recipientName: this.state.recipientName,
                                recipientContact: this.state.recipientContact,
                                recipientDeliveryAddress: this.state.recipientAddress,
                                orderMetaData: ""
                            })}
                            onError={() => { alert('something went wrong') }}
                            btnStyles={{backgroundColor:Color.PrimaryDark,width:'100%', height:45,borderRadius:4}}
                            textStyles={[mainStyles.Heading3,{color:'#FFF', textAlign:'center', fontSize: 15,padding:15}]}
                            txref={this.uuidv4()}
                            />
                        </View>
                    </View>
                </FooterTab>
            </Footer>
            </Container>
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
        fontFamily:'Roboto-Regular',
        marginTop:20,
        color:'#333'
    }
});

const mapStateToProps = (state) => {
    return {
        giftBoxItems : state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        clearCart: () => dispatch({type:'CLEAR_CART'})
    }
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(GiftingDetailScreen);