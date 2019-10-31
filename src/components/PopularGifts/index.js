//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import {Card, Container} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Carousel from 'react-native-snap-carousel';

import mainStyles from '../../common/mainStyles';

const width = Dimensions.get('window').width;

const imageWidth = width * 0.7;

// create a component
class PopularGifts extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            gifts: this.props
        }
    }

    _renderMostPopular({item, index}){
        return(
            <TouchableOpacity style={styles.container} key={index} activeOpacity={0.8}>
                <Card style={styles.productCard}>
                    <ImageBackground
                    style={{flex:1}}
                    imageStyle={styles.productBackgroundImage}
                    source={item.image}
                    >
                        <View style={{padding:10, alignItems:'flex-end'}}>
                            <Icon name='heart' size={20} color="#fff" />
                        </View>
                    </ImageBackground>
                    <View style={{padding:6}}>
                        <Text style={mainStyles.ProductNameText}>{item.name}</Text>
                        <Text style={mainStyles.ProductPriceText}>{item.price}</Text>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }

    render() {
        const {gifts} = this.state.gifts;

        return (
            <View style={styles.container}>
                <Carousel
                    layout={'default'} 
                    data={gifts}
                    renderItem={this._renderMostPopular}
                    sliderWidth={width}
                    itemWidth={imageWidth}
                    on
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
        width:imageWidth,height:350,borderRadius:10, elevation:2
    },
    productBackgroundImage: {
        borderTopRightRadius: 10, borderTopLeftRadius: 10,
    }
});

//make this component available to the app
export default PopularGifts;
