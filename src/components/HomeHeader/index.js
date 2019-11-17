//import liraries
import {Image, Text} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
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
                        <Icon style={{}} name="bell" size={20} color={Color.primaryDark}/>
                        <View style={{width:15,height:15,borderRadius:15/2, alignItems:'center', position:'absolute', top:8, right:9, backgroundColor: 'orange'}}><Text style={{color:'#FFF',fontSize:10, fontWeight: 'bold'}}>2</Text></View>
                    </Button>
                    <Button onPress={onNavigateToGiftStores} badge transparent>
                        <Icon3 style={{position:'absolute'}} name="store" size={20} color={Color.primaryDark}/>
                    </Button>
                </Right>
            </Header>
        );
    }
}

//make this component available to the app
export default HomeHeader;
