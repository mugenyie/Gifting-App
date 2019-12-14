//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SectionTitle from '../SectionTitle';
import PopularGifts from '../PopularGifts';
import {mostPopularProducts} from '../../Data';

// create a component
class MostPopular extends Component {
    render() {
        return (
            <View>
                <SectionTitle title="Most popular" subtitle="Swipe to view popular gift items." seeMore="View all"/>
                <View style={{padding:10}}/>
                <PopularGifts navigateToProduct={this.props.productNavigation} gifts={mostPopularProducts}/>
            </View>
        );
    }
}

//make this component available to the app
export default MostPopular;
