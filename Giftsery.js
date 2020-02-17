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

import OrderSuccess from './src/containers/OrderSuccess';
import GiftingDetailScreen from './src/containers/GiftingDetailScreen';
import Anniversaries from './src/containers/Anniversaries';
import OrderHistory from './src/containers/OrderHistory';
import Product from './src/containers/Product';
import Category from './src/containers/Category';
import GiftStores from './src/containers/GiftStores';
import EditProfile from './src/containers/EditProfile';

import GiftBoxIcon from './src/components/GiftBoxIcon';
import Color from './src/common/Color';
import MainStyles from './src/common/mainStyles';
import NewAnniversary from './src/containers/NewAnniversary';


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

  return <IconComponent name={iconName} size={26} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: Main,
    Explore: ExploreScreen,
    GiftBox: {
      screen: GiftBoxScreen,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    Saved: {
      screen: SavedScreen,
      navigationOptions:{
        title:"Saved"
      }
    },
    Profile: {screen: ProfileScreen}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showLabel: true,
      labelStyle: {textTransform:'uppercase',fontFamily:'OpenSans-Regular', fontWeight:'bold',fontSize:10},
      activeTintColor: Color.primaryDark,
      inactiveTintColor: Color.Grey,
    },
  }
);

const RootNavigator = createSwitchNavigator(
  {
    Loading : {
      screen:Loading,
      navigationOptions:{
        headerShown:false
      }
    },
    PhoneAuthScreen : {
      screen:Loading,
      navigationOptions:{
        headerShown:false
      }
    },
    Main: {screen: TabNavigator}
  },
  {
    initialRouteName: 'Loading'
  }
);

const StackNavigator = createStackNavigator({
  AppEntry: {
    screen: RootNavigator,
    navigationOptions: {
      headerShown: false
    }
  },
  Product: {
    screen: Product,
    navigationOptions: {
      headerShown: false
    }
  },
  Category: {
    screen: Category,
    navigationOptions: {
      headerShown: false
    }
  },
  NewAnniversary: {
    screen: NewAnniversary,
    navigationOptions: {
      header: false,
    }
  },
  GiftingDetail: {
    screen: GiftingDetailScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  GiftStores: {
    screen: GiftStores,
    navigationOptions: {
      headerShown: false
    }
  },
  Anniversaries:{
    screen: Anniversaries,
    navigationOptions: {
      headerShown: false
    }
  },
  OrderHistory:{
    screen: OrderHistory,
    navigationOptions: {
      headerShown: false
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      headerShown: false
    }
  },
  OrderSuccess:{
    screen: OrderSuccess
  }
});

const AppStackNavigator = createAppContainer(StackNavigator);