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
import Profile from './src/containers/Profile';

import Birthdays from './src/containers/Birthdays';
import Notifications from './src/containers/Notifications';
import GiftBox from './src/containers/GiftBox';


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
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(MainNavigator);