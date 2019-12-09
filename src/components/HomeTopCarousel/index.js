import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Carousel from '../Carousel';

export default class HomeTopCarousel extends Component {
  render() {
    const images = [
      {
        source: require('../../../assets/cake_carousel.jpg'),
        caption: "Cake"
      },
      {
        source: require('../../../assets/flowers_carousel.jpg'),
        caption: "Flowers"
      },
      {
        source: require('../../../assets/toys_carousel.jpg'),
        caption: "Toys"
      },
      {
        source: require('../../../assets/jewlry_carousel.jpg'),
        caption: "Jewelry"
      },
      {
        source: require('../../../assets/apparel_carousel.jpg'),
        caption: "Apparel"
      },
    ];

    return (
      <View>
        <Carousel categoryNavigation={this.props.categoryNavigation} images={images} />
      </View>
    );
  }
}
