//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {featuredVendors} from '../../Data';
import SectionTitle from '../SectionTitle';
import GiftStoresSlider from '../GiftStoresSlider';

// create a component
class FeaturedGiftStores extends Component {
    render() {
        return (
            <View>
                <SectionTitle title="Gift stores" subtitle="Follow gift stores to keep up with their gift collections." seeMore="View all"/>
                <View style={{padding:10}} />
                <GiftStoresSlider {...this.props} stores = {featuredVendors}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default FeaturedGiftStores;
