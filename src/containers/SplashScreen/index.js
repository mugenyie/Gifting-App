//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const width = Dimensions.get('window').width;

const SplashIconWidth = width * 0.18;

const Logo = require('../../../assets/icon.png');
const SPLASH_SECONDS = 3000;

// create a component
class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Home');
        }, SPLASH_SECONDS);
    }
    
      render() {
        return (
            <View style={styles.container}>
            <Animatable.View 
                animation="pulse" 
                easing="ease-out" 
                iterationCount="infinite">
                <Image 
                style={{width:SplashIconWidth,height:SplashIconWidth}}
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
        backgroundColor: '#FFFFFF'
    },
});

//make this component available to the app
export default SplashScreen;
