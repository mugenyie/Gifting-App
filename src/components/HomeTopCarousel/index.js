import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Carousel from '../Carousel';
import {featuredCategories} from '../../Data';

export default class HomeTopCarousel extends Component {
  render() {
    return (
      <View>
        <Carousel categoryNavigation={this.props.categoryNavigation} categories={featuredCategories} />
      </View>
    );
  }
}
