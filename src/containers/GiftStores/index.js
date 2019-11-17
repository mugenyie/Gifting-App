import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

// create a component
class GiftStores extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container>
            <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                    <Button onPress={() => navigate("Home")} transparent>
                        <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                    </Button>
                </Left>
                <Body>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>Gift Stores</Title>
                </Body>
                <Right>
                    
                </Right>
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
export default GiftStores;
