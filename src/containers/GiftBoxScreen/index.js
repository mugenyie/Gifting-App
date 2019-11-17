import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

// create a component
class GiftBoxScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container>
            <Header style={{backgroundColor:"#fff",paddingLeft:20,paddingBottom:4,paddingTop:2,height:50}}>
                <Body>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>GiftBox</Title>
                </Body>
            </Header>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default GiftBoxScreen;
