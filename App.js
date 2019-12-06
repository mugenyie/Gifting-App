/**
 * Giftsery Project
 * Author: Emmanuel Columbus Mugenyi
 */

//import liraries
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import SplashScreen from './src/containers/SplashScreen';

import HomeScreen from './src/containers/HomeScreen';
import ExploreScreen from './src/containers/ExploreScreen';
import GiftBoxScreen from './src/containers/GiftBoxScreen';
import SavedScreen from './src/containers/SavedScreen';
import ProfileScreen from './src/containers/ProfileScreen';

import Product from './src/containers/Product';
import Category from './src/containers/Category';
import Birthdays from './src/containers/Birthdays';
import NewBirthday from './src/containers/NewBirthday';
import Notifications from './src/containers/Notifications';
import LiveChat from './src/containers/LiveChat';
import GiftStores from './src/containers/GiftStores';
import Color from './src/common/Color';
import { Col } from 'native-base';

class IconWithBadge extends Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Icon name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'orange',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const HomeIconWithBadge = props => {
  return <IconWithBadge {...props} badgeCount={3} />;
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
    iconName = 'gift';
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
    Home: { screen: HomeScreen },
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
      inactiveTintColor: 'rgba(21,52,78, 0.7)',
    },
  }
);


const RootNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Home: TabNavigator
}, {
  initialRouteName: 'Splash'
});

const MainNavigator = createStackNavigator({
  SplashScreen: {
    screen: RootNavigator,
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
  LiveChat: {
    screen: LiveChat,
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