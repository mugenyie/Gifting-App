//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class HomeGreeting extends Component {
    render() {
        return (
            <View style={{flexDirection: 'column', marginTop:20,marginBottom:10, paddingLeft: 20}}>
                <View style={{flexDirection:'row',marginBottom:8 }}>
                    <Text style={{fontSize:28}}>Hi, </Text>
                    <Text style={{fontSize:28, fontWeight: 'bold'}}>There</Text>
                </View>
                <Text style={{fontSize:16}}>Happy gifting :)</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default HomeGreeting;
