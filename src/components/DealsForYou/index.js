//import liraries
import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {Button, View} from 'native-base';

import ProductListItem from '../ProductListItem';
import SectionTitle from '../SectionTitle';

import ProductAPI from '../../services/ProductAPI';


function Item({Item, onSelect}){
    return(
        <ProductListItem 
        productNavigation={onSelect}
        product={{id:Item.id,name:Item.name,imageSource:{uri:Item.imageUrl},price:Item.price}} 
        />
    );
  }

// create a component
class DealsForYou extends Component {
    state = {
        featuredProducts: []
    }
    
    componentDidMount(){
        ProductAPI.GetFeatured()
        .then(data => {
            const featuredProducts = data.body;
            this.setState({featuredProducts})
        })
        .catch(error => alert(error))
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <SectionTitle title="Giftsery picks for you" subtitle="Top recommendations for you today." />
                <FlatList 
                numColumns={2}
                contentContainerStyle={{padding:10}}
                data={this.state.featuredProducts.sort((a, b) => a.displayOrder - b.displayOrder)}
                renderItem={({ item }) => (
                    <Item
                    onSelect={this.props.productNavigation}
                    Item={item}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

//make this component available to the app
export default DealsForYou;
