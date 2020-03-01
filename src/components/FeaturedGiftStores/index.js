//import liraries
import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import {ThreeDots} from '../../components/ServerLoader';
const width = Dimensions.get('window').width;

import SectionTitle from '../SectionTitle';
import GiftStoresSlider from '../GiftStoresSlider';

import VendorAPI from '../../services/VendorAPI';

// create a component
class FeaturedGiftStores extends Component {
    state = {
        featuredVendors: []
    }
    
    componentDidMount(){
        VendorAPI.GetFeatured()
        .then(data => {
            const featuredVendors = data.body;
            this.setState({featuredVendors})
        })
        .catch(error => alert(error))
    }

    render() {
        if(this.state.featuredVendors.length < 1){
            return (
                <View>
                    <SectionTitle title="Gift stores" subtitle="Selected gift stores."/>
                    <View style={{marginTop:-40,marginBottom:10}}>
                     <ThreeDots width={width} height={100} />
                    </View>
                </View>
            );
        }else{
            return (
                <View>
                    <SectionTitle {...this.props} title="Gift stores" subtitle="Selected gift stores." seeMore={true}/>
                    <View style={{padding:10}} />
                    <GiftStoresSlider {...this.props} stores = {this.state.featuredVendors}/>
                </View>
            );
        }
    }
}


//make this component available to the app
export default FeaturedGiftStores;
