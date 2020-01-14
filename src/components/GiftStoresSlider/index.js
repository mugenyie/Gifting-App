//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'native-base';

import mainStyles from '../../common/mainStyles';
const width = Dimensions.get('window').width;

const imageWidth = (width * 0.4);


// create a component
class GiftStoresSlider extends Component {
    _renderItem = (item, onSelect) => 
    {
        return(
            <Card key={item.id} style={styles.imageContainer}>
                <ImageBackground 
                style={[{flex:1,justifyContent:'center',alignItems:'center'}]}
                imageStyle={styles.storeBackgroundImage}
                resizeMode="cover" resizeMethod="scale" source={{uri:item.imageUrl}}>
                    <TouchableOpacity onPress={()=>onSelect("Category", {vendorId:item.id})} activeOpacity={0.8} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{justifyContent:'center',backgroundColor:"#fff",width:100,padding:10,alignContent:'center',opacity:0.8,alignSelf:"center"}}>
                            <Text style={[mainStyles.Heading3,{textAlign:'center',color:"#000"}]}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </Card>
        );
    }

    render() {
        const { stores } = this.props;
        const onSelect = this.props.navigation.navigate;

        if (stores && stores.length) {
        return (
            <SafeAreaView style={{flex: 1}}>
                <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={stores}
                renderItem = {({item}) => this._renderItem(item, onSelect)}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{paddingLeft:10,paddingRight:10}}
                />
            </SafeAreaView>
        );
    }
    return null;        
    }
}

// define your styles
const styles = StyleSheet.create({
      imageContainer: {
        width:imageWidth,
        height:200,
        borderRadius:10, 
        marginRight:10, 
        flexDirection: 'column', 
        elevation: 2,
      },

      storeBackgroundImage: {
        borderRadius:10,
    }
});

//make this component available to the app
export default GiftStoresSlider;
