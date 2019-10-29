import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Carousel from '../Carousel';

export default class HomeTopCarousel extends Component {
  render() {
    const images = [
      {
        source: require('../../../assets/birthday-cake.png'),
        caption: "Cake"
      },
      {
        source: require('../../../assets/flower-bouquet.png'),
        caption: "Flowers"
      },
      {
        source: require('../../../assets/toy.png'),
        caption: "Toys"
      },
      {
        source: require('../../../assets/rings.png'),
        caption: "Rings"
      },
    ];

    return (
      <View style={styles.container}>
        <Carousel images={images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  }
});
