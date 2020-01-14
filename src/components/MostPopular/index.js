//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import {ThreeDots} from '../../components/ServerLoader';
const width = Dimensions.get('window').width;

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
        if(this.state.mostPopularProducts.length < 1){
            return (
                <View>
                    <SectionTitle title="Most popular" subtitle="Swipe to view popular gift items." />
                    <View style={{marginTop:-40,marginBottom:10}}>
                     <ThreeDots width={width} height={100} />
                    </View>
                </View>
            );
        }else{
            return (
                <View>
                    <SectionTitle title="Most popular" subtitle="Swipe to view popular gift items." seeMore="View all"/>
                    <View style={{padding:10}}/>
                    <PopularGifts navigateToProduct={this.props.productNavigation} gifts={this.state.mostPopularProducts}/>
                </View>
            );
        }
    }
}

//make this component available to the app
export default MostPopular;
