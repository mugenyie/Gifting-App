//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Container} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Carousel from 'react-native-snap-carousel';

import mainStyles from '../../common/mainStyles';

const width = Dimensions.get('window').width;

const imageWidth = width * 0.8;

const Item = ({index, imageSource, productName, productPrice, onSelect}) => {
    return(
        <TouchableOpacity onPress={() => onSelect(index)} style={styles.container} key={index} activeOpacity={0.8}>
            <Card style={styles.productCard}>
                <ImageBackground
                style={{flex:1}}
                imageStyle={styles.productBackgroundImage}
                source={imageSource}
                >
                    <View style={{padding:10, alignItems:'flex-end'}}>
                        <Icon name='heart' size={20} color="#fff" />
                    </View>
                </ImageBackground>
                <View style={{padding:8}}>
                    <Text style={mainStyles.ProductNameText}>{productName}</Text>
                    <Text style={mainStyles.ProductPriceText}>{productPrice}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
}

// create a component
class PopularGifts extends Component {

    render() {
        const {gifts, navigateToProduct} = this.props;
        const onSelect = (index) => navigateToProduct("Product");

        return (
            <View style={styles.container}>
                <Carousel
                    layout={'default'} 
                    data={gifts}
                    renderItem={({item}) => (
                        <Item 
                        imageSource={item.image}
                        productName={item.name}
                        productPrice={item.price}
                        onSelect={onSelect}
                        />
                    )}
                    sliderWidth={width}
                    itemWidth={imageWidth}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    productCard: {
        width:imageWidth,height:350,borderRadius:8, elevation:2
    },
    productBackgroundImage: {
        borderTopRightRadius: 8, borderTopLeftRadius: 8,
    }
});

//make this component available to the app
export default PopularGifts;
