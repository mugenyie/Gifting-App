/**
 * Giftsery Project
 * Author: Emmanuel Columbus Mugenyi
 */

//import liraries
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { fadeOut } from 'react-navigation-transitions';

import SplashScreen from './src/containers/SplashScreen';

import HomeScreen from './src/containers/HomeScreen';
import ExploreScreen from './src/containers/ExploreScreen';
import GiftBoxScreen from './src/containers/GiftBoxScreen';
import SavedScreen from './src/containers/SavedScreen';
import ProfileScreen from './src/containers/ProfileScreen';

import Product from './src/containers/Product';
import Category from './src/containers/Category';
import NewBirthday from './src/containers/NewBirthday';
import GiftStores from './src/containers/GiftStores';


const RootNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Home: HomeScreen
}, {
  initialRouteName: 'Splash'
});

const HomeWithBottomNavigation = createStackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  Explore: { 
    screen: ExploreScreen,
    navigationOptions: {
      header: null,
    }
  },
  GiftBox: {
    screen: GiftBoxScreen,
    navigationOptions: {
      header: null,
    }
  },
  Saved: {
    screen: SavedScreen,
    navigationOptions: {
      header: null,
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    }
  },
},
{
  transitionConfig: () => fadeOut(1),
}
);

const AllNavigation = createStackNavigator({
  SplashScreen: {
    screen: RootNavigator,
    navigationOptions: {
      header: null,
    }
  },
  HomeScreen: {
    screen: HomeWithBottomNavigation,
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
  GiftStores: {
    screen: GiftStores,
    navigationOptions: {
      header: null,
    }
  }
});

export default createAppContainer(AllNavigation);