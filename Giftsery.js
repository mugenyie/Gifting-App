/**
 * Giftsery Project
 * Author: Emmanuel Columbus Mugenyi
 */

//import liraries
import React, { Component } from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Loading from './src/containers/Loading';
import PhoneAuthScreen from './src/containers/PhoneAuthScreen';
import Main from './src/containers/Main';

import ExploreScreen from './src/containers/ExploreScreen';
import GiftBoxScreen from './src/containers/GiftBoxScreen';
import SavedScreen from './src/containers/SavedScreen';
import ProfileScreen from './src/containers/ProfileScreen';

import GiftingDetailScreen from './src/containers/GiftingDetailScreen';
import Birthdays from './src/containers/Birthdays';
import OrderHistory from './src/containers/OrderHistory';
import Product from './src/containers/Product';
import Category from './src/containers/Category';
import NewBirthday from './src/containers/NewBirthday';
import GiftStores from './src/containers/GiftStores';
import EditProfile from './src/containers/EditProfile';

import GiftBoxIcon from './src/components/GiftBoxIcon';
import Color from './src/common/Color';


class Giftsery extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}
export default Giftsery;

const HomeIconWithBadge = props => {
  return <GiftBoxIcon {...props}/>;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;

  if(routeName === 'Home'){
    iconName = 'home';
  } else if(routeName === 'Explore'){
    iconName = 'search1'; 
  }
  else if (routeName === 'GiftBox') {
    IconComponent = HomeIconWithBadge;
  } else if (routeName === 'Saved') {
    iconName = 'heart';
  } else if(routeName === 'Profile'){
    iconName = 'user';
  }

  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Main },
    Explore: { screen: ExploreScreen },
    GiftBox: {
      screen: GiftBoxScreen,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    Saved: {screen: SavedScreen},
    Profile: {screen: ProfileScreen}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Color.primaryDark,
      inactiveTintColor: '#5a6c40',
    },
  }
);

const RootNavigator = createSwitchNavigator(
  {
    Loading,
    PhoneAuthScreen,
    Main: {screen: TabNavigator}
  },
  {
    initialRouteName: 'Loading'
  }
);

const AppStackNavigator = createAppContainer(createStackNavigator({
    AppEntry: {
      screen: RootNavigator,
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
    GiftingDetail: {
      screen: GiftingDetailScreen,
      navigationOptions: {
        header: null,
      }
    },
    GiftStores: {
      screen: GiftStores,
      navigationOptions: {
        header: null,
      }
    },
    Birthdays:{
      screen: Birthdays,
      navigationOptions: {
        header: null,
      }
    },
    OrderHistory:{
      screen: OrderHistory,
      navigationOptions: {
        header: null,
      }
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        header: null,
      }
    }
  }));