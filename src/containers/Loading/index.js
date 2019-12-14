//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { StoreUserData, GetUserData } from '../../services/UserAuthManager';
import GoogleAuth from '../../services/GoogleAuth';

const width = Dimensions.get('window').width;

const SplashIconWidth = width * 0.18;

const Logo = require('../../../assets/icon.png');
const SPLASH_SECONDS = 3000;

const GoogleAuthClient = new GoogleAuth();

// create a component
class Loading extends Component {

    async componentDidMount() {
        setTimeout(() => {
            this._checkLoginStatus();
        }, SPLASH_SECONDS);
    }
    
    _checkLoginStatus = async () =>{
        await GoogleAuthClient._getCurrentUser()
        .then(userInfo => {
            StoreUserData(userInfo);
            this.props.navigation.navigate(userInfo ? 'Home' : 'Login')
          })
          .catch(error =>{
              //alert(error);
              this.props.navigation.navigate('Login');
          });
    }

      render() {
        return (
            // <SignInWithGoogle />
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
export default Loading;
