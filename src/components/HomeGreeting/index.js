//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import mainStyles from '../../common/mainStyles';

// create a component
class HomeGreeting extends Component {
    render() {
        return (
            <View style={{flexDirection: 'column',marginBottom:5, paddingLeft: 10}}>
                <View style={{flexDirection:'row',marginBottom:2, alignSelf:"baseline"}}>
                    <Text style={[mainStyles.Heading2Light, {fontSize:18}]}>Hi, </Text>
                    <Text style={[mainStyles.Heading2,{letterSpacing:4}]}>{this.props.customerName}</Text>
                </View>
                <Text style={[mainStyles.TextRegular, {fontSize:14,letterSpacing:1, paddingTop:2}]}>Happy gifting :)</Text>
            </View>
        );
    }
}

//make this component available to the app
export default HomeGreeting;
