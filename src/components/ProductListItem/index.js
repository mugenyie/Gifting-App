//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import {Card} from 'native-base';

import mainStyles from '../../common/mainStyles';

const width = Dimensions.get('window').width;

const imageWidth = (width / 2) - 15;


// create a component
class ProductListItem extends Component {
    render() {
        const { product, productNavigation } = this.props;
        return (
            <TouchableOpacity 
            onPress={()=> productNavigation("Product",{productId:product.id})}
            style={[{paddingBottom:15, width:imageWidth, marginRight:10}]} activeOpacity={0.8}>
                <Card style={styles.productCard}>
                    <ImageBackground
                    style={{flex:1}}
                    resizeMode='cover'
                    imageStyle={styles.productBackgroundImage}
                    source={product.imageSource}
                    >
                        {/* <View style={{top:4,right:4, alignItems:'flex-end'}}>
                            <Icon name='heart' size={32} color="#15344e" />
                        </View> */}
                    </ImageBackground>
               
                </Card>
                <View style={{paddingTop:4}}>
                    <Text style={[mainStyles.ProductNameText,{fontWeight:'bold'}]}>{product.name}</Text>
                    <Text style={mainStyles.ProductPriceText}>Ushs. {product.price}</Text>
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
