//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import mainStyles from '../../common/mainStyles';

// create a component
class HomeGreeting extends Component {
    render() {
        return (
            <View style={{flexDirection: 'column', marginTop:20,marginBottom:5, paddingLeft: 10}}>
                <View style={{flexDirection:'row',marginBottom:2 }}>
                    <Text style={[mainStyles.Heading2Light]}>Hi, </Text>
                    <Text style={mainStyles.Heading1}>There</Text>
                </View>
                <Text style={[mainStyles.TextRegular, {fontSize:14,letterSpacing:1}]}>Happy gifting :)</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default HomeGreeting;
