//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

import * as Animatable from 'react-native-animatable';


const Logo = require('../../../assets/logo_bg.png');

// create a component
class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Animatable.View 
                animation="pulse" 
                easing="ease-out" 
                iterationCount="infinite" 
                style={{ textAlign: 'center' }}>
                    <Image 
                    style={{width:140,height:140}}
                    resizeMode='contain'
                    source={Logo}
                    />
                </Animatable.View>
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
        backgroundColor: '#F7EE3C',
    },
});

//make this component available to the app
export default SplashScreen;
