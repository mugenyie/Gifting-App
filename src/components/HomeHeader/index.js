//import liraries
import {Image, Text, Dimensions, TouchableOpacity, Platform} from 'react-native';
import React, { Component } from 'react';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Feather';
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
            iosBarStyle="dark-content" 
            style={{backgroundColor:Platform.OS=="android"?"#FFF":""}}>
                <Left>
                    <Button onPress={() => this.props.navigation.navigate("Anniversaries")} transparent>
                        <Icon name="ribbon"/>
                    </Button>
                </Left>
                <Body>
                    <Image 
                    source = {fullLogo}
                    resizeMode = 'contain'
                    style = {{width:screenWidth*0.26,right:Platform.OS=="android"?-screenWidth*0.6:0}}
                    />
                </Body>
                <Right>
                    <Button onPress={() => this.props.navigation.navigate("OrderHistory")} transparent>
                        <Icon name="list"/>
                    </Button> 
                </Right>
            </Header>
        );
    }
}

//make this component available to the app
export default HomeHeader;
