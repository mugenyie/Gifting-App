//import liraries
import React, { Component } from 'react';
import { FlatList } from 'react-native';

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
                productNavigation={this.props.navigation.push}
                product={{id:item.id,name:item.name,imageSource:{uri:item.displayImage},price:item.price}} 
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            />
        );
    }
}

//make this component available to the app
export default ProductSlider;
