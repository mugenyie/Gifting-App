//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Left, Body, Right, Button, Title, Content, ListItem} from 'native-base';
import ButtonOutline from '../../components/ButtonOutline';
import OrdersAPI from '../../services/OrdersAPI';
import ActivityLoader from '../../components/ActivityLoader';
import {priceFormat} from '../../helpers';
import {GetUserData} from '../../services/UserAuthManager';

import Color from '../../common/Color';
import MainStyles from '../../common/mainStyles';

// create a component
class OrderHistory extends Component {
    constructor(){
        super();
        this.state = {
            OrdersHistory : [],
            ActivityInProgress : false
        }
    }

    async componentDidMount(){
        await this.fetchOrders();
    }

    fetchOrders = async () => {
        this.setState({ActivityInProgress:true})
        let customerId;

        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                customerId = userInfo.customerId
            }else{
                // Lock out the user
            }
        })
        .catch(error => {
            alert(error);
        })
        
        await OrdersAPI.OrderHistory(customerId)
        .then(data => {
            console.log(data.body)
            this.setState({OrdersHistory : data.body})
            this.setState({ActivityInProgress: false})
        })
        .catch(err => {
            alert(err);
            this.setState({ActivityInProgress: true})
        })
    }

    _renderNoItems = () => {
        return (
            <View style={styles.container}>
                <Text style={MainStyles.Heading3}>No orders</Text>
                <ButtonOutline marginTop={20} title="Start Shopping" iconName="gift" onPress={()=>this.props.navigation.navigate("Home")} />
            </View>
        )
    }

    _renderOrderItem = (order) => {
        return (
            <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('OrderDetail',{OrderId:order.orderId})}
            style={{flex:1,flexDirection:'row',justifyContent:'space-between',paddingTop:20,paddingBottom:5,borderBottomWidth:0.5,borderBottomColor:Color.LightRose}}>
                <View style={{flex:0.7}}>
                    <Text style={[MainStyles.IconText,{fontSize:13,paddingBottom:10}]}>Order#: {order.orderId}</Text>
                    <Text style={[MainStyles.TextRegular,{color:Color.Grey,fontSize:13,paddingBottom:5}]}>{order.createdOn}</Text>
                    <Text style={[MainStyles.TextRegular,{color:'#f57428',fontWeight:'bold',fontSize:13,paddingBottom:3}]}>{order.orderStatus == 3 ? `Delivered on ${order.deliveryTime}` : `Estimated Delivery on ${order.estimatedDeliveryTime}`}</Text>
                </View>
                <View style={{flex:0.3,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Image 
                    source={{uri:order.orderImage}} style={MainStyles.Thumbnail} />
                    <Text style={[MainStyles.ProductPriceText,{textAlign:'center'}]}>{priceFormat(order.amountPaid)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderOrders = (OrdersHistory) => {
        return(
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={OrdersHistory}
            renderItem = {({item}) => this._renderOrderItem(item)}
            keyExtractor={(item) => item.orderId.toString()}
            contentContainerStyle={{paddingLeft:10}}
            />
        )
    }

    render() {
        const {OrdersHistory, ActivityInProgress} = this.state;
        return (
            <Container>
                <NavigationEvents
                onDidFocus={() => this.fetchOrders()}
                />
                <ActivityLoader display={ActivityInProgress} />
                {
                    OrdersHistory.length > 0 ? this._renderOrders(OrdersHistory) : this._renderNoItems()
                }
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
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default OrderHistory;
