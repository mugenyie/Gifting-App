//import liraries
import {Image, Text} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Header, Left, Body, Right, Button, Title, Badge } from 'native-base';

import Color from '../../common/Color';

const fullLogo = require('../../../assets/full_logo_alpha.png');

// create a component
class HomeHeader extends Component {
    render() {
        const {onNavigateToBirthdays, onNavigateToNotifications} = this.props;

        return (
            <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                    <Button onPress={onNavigateToBirthdays} transparent>
                    <Icon color={Color.primaryDark} size={22} name="birthday-cake" />
                    </Button>
                </Left>
                <Body>
                    <Image 
                    source = {fullLogo}
                    resizeMode = 'contain'
                    style = {{height:32}}
                    />
                </Body>
                <Right>
                    <Button onPress={onNavigateToNotifications} badge transparent>
                        <Badge style={{ width:12,height:12}}></Badge>
                        <Icon style={{position:'absolute'}} name="bell" size={22} color={Color.primaryDark}/>
                    </Button>
                </Right>
            </Header>
        );
    }
}

//make this component available to the app
export default HomeHeader;
