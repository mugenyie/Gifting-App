//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content} from 'native-base';

import HomeHeader from '../../components/HomeHeader';
import FooterTabs from '../../components/FooterTabs';
import HomeTopCarousel from '../../components/HomeTopCarousel';
import HomeGreeting from '../../components/HomeGreeting';
import DealsForYou from '../../components/DealsForYou';
import FollowStores from '../../components/FollowStores';
import MostPopular from '../../components/MostPopular';

import Color from '../../common/Color';

// create a component
class Home extends Component {
    render() {
        return (
            <Container>

                <HomeHeader/>

                <Content style={{ flex: 1, flexDirection: 'column'}}>
                    <ScrollView style={{flex: 1}}>
                        <HomeGreeting />
                        <HomeTopCarousel />
                        <DealsForYou />
                        <FollowStores />
                        <MostPopular />
                    </ScrollView>
                </Content>

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
