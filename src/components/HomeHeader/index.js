//import liraries
import {Image, Text, Dimensions, TouchableOpacity, Platform} from 'react-native';
import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Title, Badge, View, Icon } from 'native-base';

import IconWithBadge from '../IconWithBadge';
import Color from '../../common/Color';

const fullLogo = require('../../../assets/header_image.png');

const screenWidth = Dimensions.get('window').width;

// create a component
class HomeHeader extends Component {
    render() {

        return (
            <Header 
            androidStatusBarColor={Color.PrimaryDark} 
            style={{backgroundColor:"#fff"}}>
                <Left>
                    <Button onPress={() => this.props.navigation.navigate("Anniversaries")} transparent>
                        <Icon style={{color:Color.LightRose,fontSize:screenWidth*0.07}} name="ribbon"/>
                    </Button>
                </Left>
                <Body>
                    <Image 
                    source = {fullLogo}
                    resizeMode = 'contain'
                    style = {{width:screenWidth*0.26,right:Platform.OS=="android"?-screenWidth*0.2:0}}
                    />
                </Body>
                <Right>
                    <Button onPress={() => this.props.navigation.navigate("OrderHistory")} transparent>
                        <Icon style={{color:Color.LightRose,fontSize:screenWidth*0.07}} name="list"/>
                    </Button> 
                </Right>
            </Header>
        );
    }
}

//make this component available to the app
export default HomeHeader;
