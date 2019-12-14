//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ProductListItem from '../ProductListItem';

// create a component
class ProductSlider extends Component {
    render() {
        const {products} = this.props;
        return (
            <FlatList 
            horizontal
            contentContainerStyle={{paddingLeft:10,paddingRight:10}}
            showsHorizontalScrollIndicator={false}
            data={products}
            renderItem={({ item }) => (
                <ProductListItem 
                productNavigation={this.props.navigation.navigate}
                product={{id:item.id,name:item.name,imageSource:{uri:item.imageUrl},price:item.price}} 
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            />
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
export default ProductSlider;
