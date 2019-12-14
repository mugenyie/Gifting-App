import React, { Component } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, TouchableOpacity,FlatList, SafeAreaView } from 'react-native';
import {Card} from 'native-base';

import mainStyles from '../../common/mainStyles';

function Item({index, imageSource, caption, onSelect}){
  return(
    <TouchableOpacity style={{marginRight:10}} onPress={() => onSelect(index)} key={index} activeOpacity={0.6}>
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
    const { categories, categoryNavigation } = this.props;
    const onSelect = (index) => categoryNavigation("Category");

    if (categories && categories.length) {
      return (
        <SafeAreaView style={{flex: 1}}>
          <FlatList 
          horizontal
          contentContainerStyle={{paddingLeft:10,paddingRight:10}}
          showsHorizontalScrollIndicator={false}
          data={categories.sort((a, b) => a.displayOrder - b.displayOrder)}
          renderItem={({ item }) => (
            <Item
              imageSource={{uri:item.imageUrl}}
              caption={item.name}
              onSelect={onSelect}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
      );
    }
    return null;    
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width:140,
    height:140,
    borderRadius:16, 
    flexDirection: 'column', 
    alignItems:'center',
    elevation: 4,
  }
});
