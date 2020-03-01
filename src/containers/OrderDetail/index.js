import React, { Component } from 'react';
import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Container, Header, Left, Body, Right, Button, Title, Content, ListItem} from 'native-base';
import OrdersAPI from '../../services/OrdersAPI';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import {priceFormat} from '../../helpers';
import ItemDetail from './ItemDetail';


const labels = ["Order Placed","Preparation","In Transit","Delivered"];

const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: Color.PrimaryDark,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: Color.PrimaryDark,
    stepStrokeUnFinishedColor: Color.Grey,
    separatorFinishedColor: Color.PrimaryDark,
    separatorUnFinishedColor: Color.Grey,
    stepIndicatorFinishedColor: Color.PrimaryDark,
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: Color.PrimaryDark,
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: Color.Grey,
    labelColor: Color.Grey,
    labelSize: 13,
    currentStepLabelColor: Color.PrimaryDark
}


// create a component
class OrderDetail extends Component {
    constructor(){
        super();

        this.state={
            orderId:0,
            currentPosition:0,
            orderItems : [],
            giftMessage : "",
            additionalInstruction : "",
            senderName : "",
            recipientName : "",
            recipientContact : "",
            recipientDeliveryAddress : "",
            expectedDeliveryTime : "",
            amountPaid : 0,
            createdOn : "",
        }
    }

    async componentDidMount(){
        let orderId = this.props.navigation.getParam("OrderId");

        await OrdersAPI.GetDetail(orderId)
        .then(data => {
            this.setState({
                orderId,
                deliveryTime : data.body.deliveryTime,
                orderItems : data.body.products, 
                currentPosition : data.body.orderStatus,
                giftMessage : data.body.giftMessage,
                additionalInstruction : data.body.additionalInstruction,
                senderName : data.body.senderName,
                recipientName : data.body.recipientName,
                recipientContact : data.body.recipientContact,
                recipientDeliveryAddress : data.body.recipientDeliveryAddress,
                expectedDeliveryTime : data.body.expectedDeliveryTime,
                amountPaid : data.body.amountPaid,
                createdOn : data.body.createdOn,
            });
        })
        .catch(err => alert(err))
    }

    _renderOrderItem = (item) => {
        return(
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("Product",{productId:item.id})}
            style={{borderBottomColor:Color.LightRose,borderBottomWidth:0.3,flexDirection:'row',paddingBottom:10,paddingTop:10}}>
                <View style={{flex:0.8,paddingRight:10}}>
                    <Text style={[mainStyles.Heading1,{fontSize:13}]}>{item.name}</Text>
                    <Text style={mainStyles.ProductPriceText}>{priceFormat(item.price)}</Text>
                </View>
                <View style={{flex:0.2}}>
                    <Image 
                    style={mainStyles.Thumbnail}
                    source={{uri:item.imageUrl}}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const {
            orderId,
            orderItems, 
            currentPosition,
            giftMessage,
            additionalInstruction,
            senderName,
            recipientName,
            recipientContact,
            recipientDeliveryAddress,
            deliveryTime,
            expectedDeliveryTime,
            amountPaid,
            createdOn,
        } = this.state;

        return (
            <Container>
                <Content 
                showsVerticalScrollIndicator={false}
                style={{paddingTop:40,flex:1}}>
                    <Text style={[mainStyles.Heading1,{fontSize:15,paddingBottom:10,paddingLeft:10}]}>Track Order (#{orderId})</Text>
                    <StepIndicator
                    stepCount={4}
                    customStyles={mainStyles.TextRegular, customStyles}
                    currentPosition={currentPosition}
                    labels={labels}
                    />
                    <View style={{paddingLeft:10,paddingRight:10, paddingTop:20}}>
                        <Text style={[mainStyles.Heading4,{fontSize:13,paddingBottom:5}]}>Amount Paid: <Text style={{fontWeight:'bold'}}>{priceFormat(amountPaid)}</Text></Text>
                        <Text style={[mainStyles.Heading4,{fontSize:13}]}>{currentPosition == 3 ? `Delivered on ${deliveryTime}` : `Estimated Delivery on ${expectedDeliveryTime}`}</Text>
                    </View>
                    <View style={{paddingBottom:10,paddingLeft:10,paddingRight:10, paddingTop:20}}>
                        <Text style={[mainStyles.Heading1,{fontSize:15,marginBottom:10}]}>Delivery Information</Text>

                        <ItemDetail title="Gift Message" body={giftMessage} />

                        <ItemDetail title="Sender" body={senderName} />

                        <ItemDetail title="Recipient" body={recipientName} />

                        <ItemDetail title="Recipient Contact" body={recipientContact} />

                        <ItemDetail title="Recipient Address" body={recipientDeliveryAddress} />

                        <ItemDetail title="Any Other Info." body={additionalInstruction} />

                        <Text style={[mainStyles.Heading1,{fontSize:15,marginTop:10}]}>Delivery Items</Text>

                        {
                            orderItems.map(item => this._renderOrderItem(item))
                        }

                    </View>
                </Content>
            </Container>
        )
    }
    
}

//make this component available to the app
export default OrderDetail;
