/**
 * Giftsery Project
 * Author: Emmanuel Columbus Mugenyi
 */

//import liraries
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SplashScreen from './src/containers/SplashScreen';
import AppIntroSlide from './src/containers/AppIntroSlide';

import Home from './src/containers/Home';
import Explore from './src/containers/Explore';
import Saved from './src/containers/Saved';
import Product from './src/containers/Product';
import Category from './src/containers/Category';

import Birthdays from './src/containers/Birthdays';
import NewBirthday from './src/containers/NewBirthday';
import Notifications from './src/containers/Notifications';
import GiftBox from './src/containers/GiftBox';
import LiveChat from './src/containers/LiveChat';
import GiftStores from './src/containers/GiftStores';


const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Birthdays: {
    screen: Birthdays,
    navigationOptions: {
      header: null,
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      header: null,
    }
  },
  GiftBox: {
    screen: GiftBox,
    navigationOptions: {
      header: null,
    }
  },
  Explore: { 
    screen: Explore,
    navigationOptions: {
      header: null,
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      header: null,
    }
  },
  Product: {
    screen: Product,
    navigationOptions: {
      header: null,
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      header: null,
    }
  },
  NewBirthday: {
    screen: NewBirthday,
    navigationOptions: {
      header: null,
    }
  },
  LiveChat: {
    screen: LiveChat,
    navigationOptions: {
      header: null,
    }
  },
  GiftStores: {
    screen: GiftStores,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(MainNavigator);