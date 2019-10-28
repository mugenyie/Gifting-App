//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import {Header, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content} from 'native-base';

import HomeHeader from '../../components/HomeHeader';
import FooterTabs from '../../components/FooterTabs';
import Color from '../../common/Color';

// create a component
class Home extends Component {
    render() {
        return (
            <Container>
                <HomeHeader/>
                <Content/>
                <FooterTabs/>
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
export default Home;
