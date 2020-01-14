import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import Carousel from '../Carousel';
import CategoryAPI from '../../services/CategoryAPI';

import {CatalogHorizontal} from '../../components/ServerLoader';
const width = Dimensions.get('window').width;
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
    const {featuredCategories} = this.state;
    
    if(featuredCategories.length < 1){
      return <CatalogHorizontal width={width} height={100} /> ;
    }else{
      return (
        <View>
          <Carousel categoryNavigation={this.props.categoryNavigation} categories={featuredCategories} />
        </View>
      );
    }
  }
}
