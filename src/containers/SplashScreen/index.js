//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

import * as Animatable from 'react-native-animatable';

import Home from '../HomeScreen';


const Logo = require('../../../assets/logo_bg.png');

// create a component
class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
            startMainScreen: false
        };
      }
    
      componentDidMount() {
          setTimeout( () => {
              this.setTimePassed();
          },3500);
      }
    
      setTimePassed() {
          this.setState({timePassed: true});
      }
    
      render() {
        const {navigate} = this.props.navigation;

        if (!this.state.timePassed) {
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
        } else {
            return (this.props.navigation.navigate("Home"));
        }
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
