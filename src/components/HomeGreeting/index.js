//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import mainStyles from '../../common/mainStyles';
import Color from '../../common/Color';

// create a component
class HomeGreeting extends Component {
    render() {
        return (
            <View style={{marginBottom:5, paddingLeft: 10}}>
                <Text>
                    <Text style={[mainStyles.Heading2Light]}>Hi </Text>
                    <Text style={[mainStyles.Heading2,{letterSpacing:3}]}>{this.props.customerName}</Text>
                </Text>
                <Text style={[mainStyles.Heading2Light, {fontSize:14,letterSpacing:1, paddingTop:5}]}>
                    Happy gifting <Icon name="smile-wink" size={18} color={Color.PrimaryDark}/>
                </Text>
            </View>
        );
    }
}

//make this component available to the app
export default HomeGreeting;
