//import liraries
import {Image, Text} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import { Header, Left, Body, Right, Button, Title, Badge, View } from 'native-base';

import Color from '../../common/Color';

const fullLogo = require('../../../assets/full_logo_alpha.png');

// create a component
class HomeHeader extends Component {
    render() {
        const {onNavigateToBirthdays, onNavigateToNotifications, onNavigateToGiftStores} = this.props;

        return (
            <Header style={{backgroundColor:"#FFF",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                    <Button onPress={onNavigateToBirthdays} transparent>
                    <Icon color={Color.primaryDark} size={20} name="birthday-cake" />
                    </Button>
                </Left>
                <Body>
                    <Image 
                    source = {fullLogo}
                    resizeMode = 'contain'
                    style = {{height:30}}
                    />
                </Body>
                <Right>
                    <Button style={{marginRight:8}} onPress={onNavigateToNotifications} transparent>
                        <Icon style={{}} name="bell-o" size={21} color={Color.primaryDark}/>
                        <View
                            style={{
                            position: 'absolute',
                            right: 10,
                            top: 8,
                            backgroundColor: 'orange',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                            }}>
                            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            5
                            </Text>
                        </View>
                    </Button>
                    <Button onPress={onNavigateToGiftStores} badge transparent>
                        <Icon3 style={{position:'absolute'}} name="shop" size={25} color={Color.primaryDark}/>
                    </Button>
                </Right>
            </Header>
        );
    }
}

//make this component available to the app
export default HomeHeader;
