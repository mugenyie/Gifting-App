//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SectionTitle from '../SectionTitle';
import GiftStoresSlider from '../GiftStoresSlider';

// create a component
class FollowStores extends Component {
    render() {
        const uri = "https://media.timeout.com/images/105147024/630/472/image.jpg";
        const stores = [
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Follow"
            },
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Following"
            },
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Follow"
            },
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Follow"
            },
          ];

        return (
            <View>
                <SectionTitle title="Gift stores" subtitle="Follow gift stores to keep up with their gift collections." seeMore="View all"/>
                <View style={{padding:10}} />
                <GiftStoresSlider stores = {stores}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default FollowStores;
