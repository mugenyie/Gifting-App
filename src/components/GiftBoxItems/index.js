import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Platform
} from "react-native";

import Icon from 'react-native-vector-icons/AntDesign';
import ProductListItem from '../ProductListItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const giftRibbon = require('../../../assets/gift_ribbon.png')

class GiftBoxItems extends Component {

    renderProducts = (products) => {
        return products.map((item, index) => {
            return (
                <View key={index} style={{flexDirection:'row'}}>
                    <ProductListItem 
                    productNavigation={this.props.navigation.navigate}
                    product={{id:item.id,name:item.name,imageSource:{uri:item.imageUrl},price:item.price}} 
                    />
                    <TouchableOpacity
                    onPress={() => this.props.onPress(item)}
                    style={{alignSelf:'flex-start',top:4}}
                    >
                        <Icon name="close" size={25}/>
                    </TouchableOpacity>
                </View>
            )
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                    <View style={{marginBottom:20}}>
                        <Image
                        style={{width}}
                        resizeMode="center"
                        source={giftRibbon}
                        />
                        <View 
                        style={{width:width*0.96,
                            height:10,backgroundColor:"#5a6c40",
                            alignSelf:'center',top:Platform.OS=='ios'? -height*0.03:-height*0.06,borderTopLeftRadius:10,borderTopRightRadius:10
                        }}
                        />
                    </View>
                    <View style={{marginLeft:20,marginRight:20}}>
                        {this.renderProducts(this.props.products)}
                    </View>
                    <View 
                    style={{width:width*0.96,
                        height:10,backgroundColor:"#5a6c40",
                        alignSelf:'center',
                        borderBottomLeftRadius:10,borderBottomRightRadius:10
                    }}
                    />
            </ScrollView>
        );
    }
}
export default GiftBoxItems;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});