import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';
import {Card} from 'native-base';


export default class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            {images.map(image => (
              <Card style={styles.imageContainer}>
                <Image resizeMode="contain" style={styles.image} source={image.source} />
                <Text>{image.caption}</Text>
              </Card>
            ))}
          </ScrollView>
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
    borderRadius:20, 
    marginLeft:20, 
    flexDirection: 'column', 
    justifyContent:'space-around',
    alignItems:'center',
    elevation: 4,
  }
});
