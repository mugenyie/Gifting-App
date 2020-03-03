/**
 * Giftsery Project
 * Author: Emmanuel Columbus Mugenyi
 */

//import liraries
import React, { Component } from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon2 from 'react-native-vector-icons/AntDesign';
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
import OrderDetail from './src/containers/OrderDetail';
import Product from './src/containers/Product';
import Category from './src/containers/Category';
import GiftStores from './src/containers/GiftStores';
import EditProfile from './src/containers/EditProfile';
import EditAnniversary from './src/containers/Anniversaries/Edit';
import AboutUs from './src/containers/AboutUs';
import HelpCenter from './src/containers/HelpCenter';

import GiftBoxIcon from './src/components/GiftBoxIcon';
import Color from './src/common/Color';
import NewAnniversary from './src/containers/NewAnniversary';
import { Button, Icon } from 'native-base';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MainStyles from './src/common/mainStyles';

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

const HeaderLeft = (navigation) => {
  return (
    <Button onPress={() => navigation.goBack()} transparent>
        <Icon style={{color:Color.LightRose,fontSize:28}} name='arrow-back' />
        {Platform.OS == 'ios'?(<Text style={[MainStyles.TextRegular,{color:Color.LightRose,fontSize:18,top:-1}]}>Back</Text>):(<View />)}
    </Button>
  )
}

const titleStyle = {
  fontSize:18,
  fontFamily:'Montserrat-Regular',
  fontWeight:'400'
}

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
      labelStyle:{textTransform:'uppercase',fontFamily:'Montserrat-Light',fontWeight:'bold',fontSize:10},
      activeTintColor: Color.PrimaryDark,
      inactiveTintColor: Color.Grey
    },
  }
);

const RootNavigator = createSwitchNavigator(
  {
    Loading,
    PhoneAuthScreen,
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
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"New Anniversary",
        headerLeft: HeaderLeft(navigation)
      })
    },
    EditAnniversary:{
      screen: EditAnniversary,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Edit Anniversary",
        headerLeft: HeaderLeft(navigation)
      })
    },
    GiftingDetail: {
      screen: GiftingDetailScreen,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Gifting Detail",
        headerLeft: HeaderLeft(navigation)
      })
    },
    GiftStores: {
      screen: GiftStores,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Gift Stores",
        headerLeft: HeaderLeft(navigation)
      })
    },
    Anniversaries:{
      screen: Anniversaries,
      navigationOptions:({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Anniversaries",
        headerLeft: HeaderLeft(navigation),
        headerRight: <Button transparent onPress={() => {navigation.navigate("NewAnniversary")}}><Icon style={{color:Color.LightRose, fontSize:25}} name="ios-add-circle-outline"/></Button>
      })
    },
    OrderHistory:{
      screen: OrderHistory,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Orders History",
        headerLeft: HeaderLeft(navigation)
      })
    },
    OrderDetail:{
      screen: OrderDetail,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Order Detail",
        headerLeft: HeaderLeft(navigation)
      })
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Edit Profile",
        headerLeft: HeaderLeft(navigation)
      })
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"About Giftsery",
        headerLeft: HeaderLeft(navigation)
      })
    },
    HelpCenter: {
      screen: HelpCenter,
      navigationOptions: ({navigation}) => ({
        headerTitleStyle:titleStyle,
        title:"Help Center",
        headerLeft: HeaderLeft(navigation)
      })
    },
    OrderSuccess:{
      screen: OrderSuccess,
      navigationOptions: {
        title:""
      }
    }
  }));