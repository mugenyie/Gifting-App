//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';

import mainStyles from '../../common/mainStyles';

const width = Dimensions.get('window').width;

const imageWidth = width * 0.45;


// create a component
class ProductListItem extends Component {
    render() {
        const { product, navigateToProduct } = this.props;
        return (
            <TouchableOpacity style={{paddingBottom:8}} onPress={navigateToProduct} activeOpacity={0.8}>
                <Card style={styles.productCard}>
                <ImageBackground
                style={{flex:1}}
                resizeMode='cover'
                imageStyle={styles.productBackgroundImage}
                source={product.imageSource}
                >
                    <View style={{top:4,right:4, alignItems:'flex-end'}}>
                        <Icon name='heart' size={32} color="#15344e" />
                    </View>
                </ImageBackground>
               
            </Card>
            <View style={{paddingTop:4}}>
                    <Text style={mainStyles.ProductNameText}>{product.name}</Text>
                    <Text style={mainStyles.ProductPriceText}>{product.price}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    productCard: {
        width:imageWidth,height:200,borderRadius:4, elevation:0
    },
    productBackgroundImage: {
        borderTopRightRadius: 4, borderTopLeftRadius: 4,
    }
});

//make this component available to the app
export default ProductListItem;
