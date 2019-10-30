//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import mainStyles from '../../common/mainStyles';

const width = Dimensions.get('window').width;

const imageWidth = width * 0.4;


// create a component
class ProductListItem extends Component {
    render() {
        const { product } = this.props;
        return (
            <TouchableOpacity activeOpacity={0.8}>
                <Card style={styles.productCard}>
                <ImageBackground
                style={{flex:1}}
                imageStyle={styles.productBackgroundImage}
                source={product.imageSource}
                >
                    <View style={{padding:10, alignItems:'flex-end'}}>
                        <Icon name='heart' size={20} color="#15344e" />
                    </View>
                </ImageBackground>
                <View style={{padding:6}}>
                    <Text style={mainStyles.ProductNameText}>{product.name}</Text>
                    <Text style={mainStyles.ProductPriceText}>{product.price}</Text>
                </View>
            </Card>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    productCard: {
        width:imageWidth,height:200,borderRadius:10, elevation:2
    },
    productBackgroundImage: {
        borderTopRightRadius: 10, borderTopLeftRadius: 10,
    }
});

//make this component available to the app
export default ProductListItem;
