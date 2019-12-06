//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title} from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

// create a component
class SavedScreen extends Component {
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:"#fff",paddingLeft:20,paddingBottom:4,paddingTop:2,height:50}}>
                <Body>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>Saved</Title>
                </Body>
            </Header>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SavedScreen;