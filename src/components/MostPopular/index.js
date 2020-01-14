//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SectionTitle from '../SectionTitle';
import PopularGifts from '../PopularGifts';
import ProductAPI from '../../services/ProductAPI';

// create a component
class MostPopular extends Component {
    state = {
        mostPopularProducts: []
    }
    
    componentDidMount(){
        ProductAPI.GetPopular()
        .then(data => {
            const mostPopularProducts = data.body;
            this.setState({mostPopularProducts})
        })
        .catch(error => alert(error))
    }

    render() {
        return (
            <View>
                <SectionTitle title="Most popular" subtitle="Swipe to view popular gift items." seeMore="View all"/>
                <View style={{padding:10}}/>
                <PopularGifts navigateToProduct={this.props.productNavigation} gifts={this.state.mostPopularProducts}/>
            </View>
        );
    }
}

//make this component available to the app
export default MostPopular;
