//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
import {Card} from 'native-base';

const width = Dimensions.get('window').width;

const imageWidth = width * 0.4;

import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
class ProductListItem extends Component {
    render() {
        const { product } = this.props;
        return (
            <Card style={styles.productCard}>
                <ImageBackground
                style={{flex:1}}
                imageStyle={styles.productBackgroundImage}
                source={product.imageSource}
                >
                    <View style={{padding:10, alignItems:'flex-end'}}>
                        <Image style={{width:20}} resizeMode={'contain'} source={require('../../../assets/heart.png')}/>
                    </View>
                </ImageBackground>
                <View style={{padding:6}}>
                    <Text style={{fontSize:13,fontWeight:'bold'}}>{product.name}</Text>
                    <Text>{product.price}</Text>
                </View>
            </Card>
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
