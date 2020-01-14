import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Carousel from '../Carousel';
import CategoryAPI from '../../services/CategoryAPI';


export default class HomeTopCarousel extends Component {

  state = {
    featuredCategories: []
  }

  componentDidMount(){
    CategoryAPI.GetFeatured()
    .then(data => {
      const featuredCategories = data.body;
      this.setState({featuredCategories})
    })
    .catch(error => alert(error))
  }

  render() {
    return (
      <View>
        <Carousel categoryNavigation={this.props.categoryNavigation} categories={this.state.featuredCategories} />
      </View>
    );
  }
}
