//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {Button} from 'native-base';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/FontAwesome';

import slides from './slides';

const fullLogoAlpha = require('../../../assets/full_logo_alpha.png');

// create a component
class AppIntroSlide extends Component {
    _renderItem = ({ item, dimensions }) => {
        return (
            <View 
            style={styles.mainContent}
            >
                <View style={{backgroundColor:"white",height:200,width:dimensions.width,alignItems:"center",justifyContent:"center"}}>
                    <Image 
                        source={fullLogoAlpha}
                        style={{height:44}}
                        resizeMode="contain"
                    />
                </View>
                <View style={{padding:40, marginTop:40}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
            </View>
        );
    };

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon name="chevron-circle-right" size={26} color="#161922"/>
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <Button style={styles.sliderButton}>
                <Text style={styles.sliderButtonText}>Start Gifting</Text>
                <Icon name="gift" size={20} style={{marginLeft:10}} color="white" />
            </Button>
        );
    };

    render() {
        return (
            <AppIntroSlider 
            slides={slides} 
            renderItem={this._renderItem}
            onDone={() => this.props.startMainScreen} 
            showSkipButton={false} 
            paginationStyle={styles.paginationStyle}
            renderNextButton={this._renderNextButton}
            renderDoneButton={this._renderDoneButton}/> 
        );
    }
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        flexDirection:"column",
        backgroundColor:"#F7EE3C"
    },
    sliderIcon:{
        marginBottom:20
    },
    sliderButton:{
        paddingRight:10,
        paddingLeft:10,
        borderRadius:4,
        backgroundColor:'#161922'
    },
    sliderButtonText:{
        color:"#FFF",
        fontSize:14,
        fontWeight:'bold'
    },
    paginationStyle:{
        alignItems:"flex-start",
    },
    title: { 
        fontSize: 24, 
        color: '#161922', 
        fontWeight: 'bold', 
        textAlign: 'center',
        marginBottom: 10
    }, 
    text: { 
        color: '#b8ad00', 
        fontSize: 16, 
        textAlign: 'center', 
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
//make this component available to the app
export default AppIntroSlide;
