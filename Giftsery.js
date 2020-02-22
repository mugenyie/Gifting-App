/**
 * Giftsery Project
 * Author: Emmanuel Columbus Mugenyi
 */

//import liraries
import React, { Component } from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {TouchableOpacity} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Icon} from 'native-base';
import Loading from './src/containers/Loading';
import PhoneAuthScreen from './src/containers/PhoneAuthScreen';
import HomeScreen from './src/containers/HomeScreen';

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
  let IconComponent = Icon2;
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
    Home: HomeScreen,
    Explore: ExploreScreen,
    GiftBox: {
      screen: GiftBoxScreen,
      navigationOptions: {
        tabBarVisible: false,
      }
    },
    Saved: SavedScreen,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      showLabel: true,
      labelStyle:{textTransform:'uppercase',fontFamily:'Roboto-Regular',fontWeight:'bold',fontSize:10},
      activeTintColor: Color.PrimaryDark,
      inactiveTintColor: Color.Grey
    },
  }
);

const RootNavigator = createSwitchNavigator(
  {
    // Loading,
    // PhoneAuthScreen,
    Main: {screen: TabNavigator}
  }
);

const AppStackNavigator = createAppContainer(createStackNavigator({
    AppEntry: {
      screen: RootNavigator,
      navigationOptions: {
        headerShown:false
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
    NewAnniversary: {
      screen: NewAnniversary,
      navigationOptions: {
        title:"New Anniversary"
      }
    },
    GiftingDetail: {
      screen: GiftingDetailScreen,
      navigationOptions: {
        title:"Gifting Detail"
      }
    },
    GiftStores: {
      screen: GiftStores,
      navigationOptions: {
        header: null,
      }
    },
    Anniversaries:{
      screen: Anniversaries,
      navigationOptions:({navigation, navigate}) => ({
        title:"Anniversaries",
        headerRight: <TouchableOpacity onPress={() => {navigation.navigate("NewAnniversary")}} style={{padding:20}}><Icon name="add" /></TouchableOpacity>
      })
    },
    OrderHistory:{
      screen: OrderHistory,
      navigationOptions: {
        title:"Order History"
      }
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: {
        title:"Edit Profile"
      }
    },
    OrderSuccess:{
      screen: OrderSuccess,
      navigationOptions: {
        title:""
      }
    }
  }));