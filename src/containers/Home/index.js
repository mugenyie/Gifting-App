//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, Button} from 'native-base';

import HomeHeader from '../../components/HomeHeader';
import FooterTabs from '../../components/FooterTabs';
import HomeTopCarousel from '../../components/HomeTopCarousel';
import HomeGreeting from '../../components/HomeGreeting';
import DealsForYou from '../../components/DealsForYou';
import FollowStores from '../../components/FollowStores';
import MostPopular from '../../components/MostPopular';


// create a component
class Home extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container>

                <HomeHeader 
                onNavigateToBirthdays={() => navigate("Birthdays")}
                onNavigateToNotifications={() => navigate("Notifications")}
                onNavigateToGiftStores={() => navigate("GiftStores")}
                />

                <Content style={{ flex: 1, flexDirection: 'column'}}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                        <HomeGreeting/>
                        <HomeTopCarousel categoryNavigation={navigate}/>
                        <DealsForYou productNavigation={navigate} />
                        <FollowStores storesNavigation={navigate}/>
                        <MostPopular productNavigation={navigate}/>
                    </ScrollView>
                </Content>

                <FooterTabs
                navigateToGiftBox={() => navigate("GiftBox")}
                navigateToProfile={() => navigate("Profile")}
                />

            </Container>
        );
    }
}


//make this component available to the app
export default Home;
