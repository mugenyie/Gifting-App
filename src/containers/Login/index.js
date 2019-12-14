//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, Image } from 'react-native';
import { Button } from 'native-base';
import {
    GoogleSigninButton
  } from '@react-native-community/google-signin';
import Icon from 'react-native-vector-icons/AntDesign';

import { SignInUser, StoreUserData } from '../../services/UserAuthManager';

import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SplashIconWidth = width * 0.2;
const LogoIcon = require('../../../assets/icon.png')

// create a component
class Login extends Component {
    state = {
        isSigninInProgress: false
    }

    _signIn = () => {
        this.setState({isSigninInProgress:true}, () => {
            SignInUser().then(userInfo => {
                this.props.navigation.navigate('Home');
            }).catch(error => {
                this.setState({isSigninInProgress:false});
                alert(error);
            })
        });
        
    }

    _ContinueAnonymous = () => {
        this.setState({isSigninInProgress:true}, () => {
            setTimeout(() => {
                this.props.navigation.navigate('Home');
            }, 500)
        });
    }

    render() {
        const {isSigninInProgress} = this.state;

        return (
            <View style={styles.container}>
                {
                    isSigninInProgress && 
                    <View style={styles.loading}>
                        <ActivityIndicator style={styles.loading} size={width*0.18} color={Color.primaryDark} />
                    </View>
                }

                <Image 
                style={{width:SplashIconWidth,height:SplashIconWidth,marginBottom:28}}
                resizeMode='contain'
                source={LogoIcon}
                />
                
                <View style={{marginBottom:height*0.08}}>
                    <Text style={[mainStyles.TextRegular,{fontSize:width*0.08}]}>Welcome to Giftsery.</Text>
                    <Text style={[mainStyles.Heading4,{fontSize:width*0.06,marginTop:10}]}>Gifting made easy !</Text>
                </View>

                <View style={{marginBottom:height*0.1,alignSelf:'center'}}>
                    <GoogleSigninButton
                        style={{ width: width*0.9, height:height*0.08 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Light}
                        onPress={this._signIn}
                        disabled={this.state.isSigninInProgress} />

                    <Button onPress={() => this._ContinueAnonymous()} transparent style={{elevation:2, marginTop:20, width: width*0.9, height:height*0.08,justifyContent:"center",alignContent:"center", flexDirection:"row",borderRadius:2,padding:4}}>
                        <Icon name='gift' size={16} color={Color.primaryDark}/>
                        <Text style={[mainStyles.TextRegular,{paddingLeft:8, fontSize:15}]}>Continue to our gifting experience</Text>
                    </Button>
                </View>

                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
                    <Text style={[mainStyles.TextRegular, {fontSize:15}]}>
                        By tapping Sign in or Continue, I Agree to Giftsery's 
                    </Text>
                    <Text style={[mainStyles.TextRegular, {fontSize:15, textDecorationLine:'underline', color:'#20232a'}]}>
                        Terms of service
                    </Text>
                    <Text style={[mainStyles.TextRegular, {fontSize:15}]}> and </Text>
                    <Text style={[mainStyles.TextRegular, {fontSize:15, textDecorationLine:'underline', color:'#20232a'}]}>
                    Privacy policy.
                    </Text>
                </View>
                    
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:22,
        paddingTop:height*0.1,
        backgroundColor: '#FFFFFF',
    },
    loading: {
        flex:1,
        elevation:1,
        backgroundColor:'rgba(255,255,255, 0.5)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
});

//make this component available to the app
export default Login;
