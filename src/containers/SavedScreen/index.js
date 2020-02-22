//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';
import SimpleHeader from '../../components/SimpleHeader';

import Color from '../../common/Color';
import MainStyles from '../../common/mainStyles';

// create a component
class SavedScreen extends Component {
    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#fff'}} androidStatusBarColor={Color.PrimaryDark}>
                <Body>
                    <Title style={[MainStyles.Heading1,{color:'#000',fontSize:18}]}>Saved Gifts</Title>
                </Body>
            </Header>
            <Content />
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
