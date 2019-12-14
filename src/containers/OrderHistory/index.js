//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

// create a component
class OrderHistory extends Component {
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                    <Button onPress={() => this.props.navigation.navigate("Home")} transparent>
                        <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                    </Button>
                </Left>
                <Body style={{paddingLeft:10}}>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>Order History</Title>
                </Body>
                <Right>
                
                </Right>
            </Header>

                <View style={{flex:1,flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                    <Text style={mainStyle.Heading3}>No orders</Text>
                    <Button onPress={() => this.props.navigation.navigate("Home")} transparent style={{marginTop:20, width:150,justifyContent:"center",alignContent:"center", flexDirection:"row",borderColor:Color.primaryDark,borderWidth:0.5,borderRadius:2,padding:4}}>
                        <Icon name='gift' size={18} color={Color.primaryDark}/>
                        <Text style={[mainStyle.TextRegular,{paddingLeft:8}]}>Start shopping</Text>
                    </Button>
                </View>


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
});

//make this component available to the app
export default OrderHistory;
