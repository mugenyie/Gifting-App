//import liraries
import {Image, Text, Dimensions} from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Feather';
import { Header, Left, Body, Right, Button, Title, Badge, View } from 'native-base';


import Color from '../../common/Color';

const fullLogo = require('../../../assets/header_image.png');

const screenWidth = Dimensions.get('window').width;

// create a component
class HomeHeader extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <Header style={{backgroundColor:"#FFF",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                    <Button onPress={() => navigate('Birthdays')} transparent>
                        <Icon color={Color.primaryDark} size={20} name="birthday-cake" />
                    </Button>
                    
                </Left>
                <Body style={{justifyContent:'center',alignItems:'center', paddingLeft:screenWidth * 0.15}}>
                        <Image 
                        source = {fullLogo}
                        resizeMode = 'contain'
                        style = {{height:24}}
                        />
                </Body>
                <Right>
                    <Button onPress={() => navigate('GiftStores')} transparent>
                        <Icon4 name="shopping-bag" size={22} color={Color.primaryDark}/>
                    </Button>

                    <Button transparent>
                        <Icon2 onPress={() => navigate('LiveChat')} name="message1" size={22} color={Color.primaryDark}/>
                    </Button>
                    
                </Right>
            </Header>
        );
    }
}

//make this component available to the app
export default HomeHeader;
