//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import HomeHeader from '../../components/HomeHeader';
import HomeTopCarousel from '../../components/HomeTopCarousel';
import HomeGreeting from '../../components/HomeGreeting';
import DealsForYou from '../../components/DealsForYou';
import FollowStores from '../../components/FollowStores';
import MostPopular from '../../components/MostPopular';

// create a component
class HomeLandingScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <HomeHeader {...this.props}/>

                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
                    <HomeGreeting/>
                    <HomeTopCarousel categoryNavigation={navigate}/>
                    <DealsForYou productNavigation={navigate} />
                    <FollowStores storesNavigation={navigate}/>
                    <MostPopular productNavigation={navigate}/>
                </ScrollView>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default HomeLandingScreen;
