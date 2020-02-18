//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';
import ButtonOutline from '../../components/ButtonOutline';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

// create a component
class OrderHistory extends Component {
    render() {
        return (
            <Container>
                <View style={{flex:1,flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                    <Text style={mainStyle.Heading3}>No orders</Text>
                    <ButtonOutline marginTop={20} title="Start Shopping" iconName="gift" onPress={()=>this.props.navigation.navigate("Home")} />
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
