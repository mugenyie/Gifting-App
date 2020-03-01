//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { Container, Header, Left, Body,Button, Right, Title, Content, ListItem,Icon} from 'native-base';
import * as Animatable from 'react-native-animatable';

import { GetUserData } from '../../services/UserAuthManager';
import Color from '../../common/Color';

const width = Dimensions.get('window').width;

const SplashIconWidth = width * 0.18;

const Logo = require('../../../assets/icon.png');
const SPLASH_SECONDS = 3000;


// create a component
class Loading extends Component {

    async componentDidMount() {
        setTimeout(async () => {
            await this._checkLoginStatus();
        }, SPLASH_SECONDS);
    }
    
    _checkLoginStatus = async () =>{
        await GetUserData()
        .then(userData => {
            if(userData){
                this.props.navigation.navigate("Home")
            }else{
                this.props.navigation.navigate("PhoneAuthScreen")
            }
        })
        .catch(error =>{
            alert(error)
        })
    }

      render() {
        return (
            <Container style={styles.container}>
                <Header transparent androidStatusBarColor={Color.PrimaryDark}/>
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
        backgroundColor: '#FFFFFF'
    },
});

//make this component available to the app
export default Loading;
