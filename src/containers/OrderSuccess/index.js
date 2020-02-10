//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import mainStyles from '../../common/mainStyles';

// create a component
class OrderSuccess extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon color="#5a6c40" size={100} name="checkcircle"  />
                <Text style={[mainStyles.Heading2,{padding:10}]}>Order Received</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("OrderHistory")}>
                <Text style={[mainStyles.TextCaption,{padding:10, textDecorationLine:'underline', fontSize:16}]}>view orders history</Text> 
                </TouchableOpacity>
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
        backgroundColor: '#FFFFFF',
    },
});

//make this component available to the app
export default OrderSuccess;
