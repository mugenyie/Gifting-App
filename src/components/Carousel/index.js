import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity,FlatList } from 'react-native';
import {Card} from 'native-base';

import mainStyles from '../../common/mainStyles';

export default class Carousel extends Component {
  _renderItem({item, index}){
    return(
      <TouchableOpacity key={index} activeOpacity={0.6}>
        <Card style={styles.imageContainer}>
          <Image resizeMode="contain" style={styles.image} source={item.source} />
          <Text style={mainStyles.TextCaption}>{item.caption}</Text>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <FlatList 
        style={{paddingLeft:10}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
        />
      );
    }
    console.log('Please provide images');
    return null;    
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  imageContainer: {
    width:120,
    height:120,
    padding:10,
    borderRadius:10, 
    marginLeft:10,
    marginRight:10, 
    flexDirection: 'column', 
    justifyContent:'space-around',
    alignItems:'center',
    elevation: 4,
  }
});
