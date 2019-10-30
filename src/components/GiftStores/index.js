//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from 'native-base';

import ViewMore from '../ViewMore';
import mainStyles from '../../common/mainStyles';

// create a component
class GiftStores extends Component {
    render() {
        const { stores } = this.props;

        if (stores && stores.length) {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {stores.map((store, index) => (
                            // const followStyle = store.status == "follow" ? {} : {};
                        
                        <Card key={index} style={styles.imageContainer}>
                            <ImageBackground 
                            style={[{flex:1,justifyContent:'center',alignItems:'center'}]}
                            imageStyle={styles.storeBackgroundImage}
                            resizeMode="cover" resizeMethod="scale" source={store.image}>
                                <TouchableOpacity activeOpacity={0.8} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <View style={{justifyContent:'center',backgroundColor:"#fff",width:100,padding:10,alignContent:'center',opacity:0.8,alignSelf:"center"}}>
                                        <Text style={[mainStyles.Heading3,{textAlign:'center',color:"#000"}]}>{store.name}</Text>
                                    </View>
                                </TouchableOpacity>
                                
                                <TouchableOpacity activeOpacity={0.9} style={
                                    [store.status == "Follow" ? {backgroundColor:"#fff"} : {backgroundColor:"#15344e"},
                                        { width:150,borderBottomLeftRadius:10,borderBottomRightRadius:10,height:28,justifyContent:'center',alignItems:'center'}]}>
                                    <Text style={[mainStyles.TextCaption, store.status == "Follow" ? "" : {color:"#fff"}]}>{store.status}</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </Card>
                        
                    
                ))}
                <ViewMore />
            </ScrollView>
        );
    }
    console.log('Please provide images');
    return null;        
    }
}

// define your styles
const styles = StyleSheet.create({
      imageContainer: {
        width:150,
        height:200,
        borderRadius:10, 
        marginLeft:10,
        marginRight:10, 
        flexDirection: 'column', 
        elevation: 2,
      },

      storeBackgroundImage: {
        borderRadius:10,
    }
});

//make this component available to the app
export default GiftStores;
