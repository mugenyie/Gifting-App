import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, TouchableOpacity,FlatList } from 'react-native';
import {Card} from 'native-base';

import mainStyles from '../../common/mainStyles';

function Item({index, imageSource, caption, onSelect}){
  return(
    <TouchableOpacity onPress={() => onSelect(index)} key={index} activeOpacity={0.6}>
      <Card style={styles.imageContainer}>
        <ImageBackground
        style={{flex:1, width:'100%'}}
        resizeMode='cover'
        imageStyle={{borderTopLeftRadius:16, borderTopRightRadius: 16}}
        source={imageSource}
        >
          
        </ImageBackground>
        <Text style={[mainStyles.TextCaption,{padding:8}]}>{caption}</Text>
      </Card>
    </TouchableOpacity>
  );
}

export default class Carousel extends Component {

  render() {
    const { images, categoryNavigation } = this.props;
    const onSelect = (index) => categoryNavigation("Category");

    if (images && images.length) {
      return (
        <FlatList 
        contentContainerStyle={{paddingLeft:10,paddingRight:20}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item }) => (
          <Item
            imageSource={item.source}
            caption={item.caption}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    console.log('Please provide images');
    return null;    
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width:140,
    height:140,
    borderRadius:16, 
    marginLeft:10,
    marginRight:2, 
    flexDirection: 'column', 
    alignItems:'center',
    elevation: 4,
  }
});
