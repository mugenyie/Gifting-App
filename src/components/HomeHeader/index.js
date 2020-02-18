//import liraries
import {Image, Text, Dimensions, TouchableOpacity, Platform} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Feather';
import { Header, Left, Body, Right, Button, Title, Badge, View } from 'native-base';

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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Anniversaries")}>
                        <Icon color={Color.primaryDark} size={20} name="birthday-cake" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Image 
                    source = {fullLogo}
                    resizeMode = 'contain'
                    style = {{width:screenWidth*0.25,right:Platform.OS=="android"?-60:0}}
                    />
                </Body>
                <Right>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("OrderHistory")}>
                        <Icon3 name="list" size={22} color={Color.primaryDark}/>
                    </TouchableOpacity> 
                </Right>
            </Header>
        );
    }
}

//make this component available to the app
export default HomeHeader;
