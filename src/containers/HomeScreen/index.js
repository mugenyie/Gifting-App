//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import ViewPager from '@react-native-community/viewpager';
import HomeInitialScreen from '../HomeLandingScreen';
import Birthdays from '../Birthdays';
import LiveChat from '../LiveChat';


// create a component
class HomeScreen extends Component {
    render() {
        return (
            <ViewPager 
            style={styles.viewPager} 
            initialPage={1}
            ref={viewPager => this.viewPager = viewPager}
            >
                <View key="1">
                    <Birthdays goToHome={()=>this.viewPager.setPage(1)} {...this.props}/>
                </View>
                <View key="2">
                    <HomeInitialScreen 
                    goToBirthday={()=>this.viewPager.setPage(0)} 
                    goToLiveChat={()=>this.viewPager.setPage(2)}
                    {...this.props}
                    />
                </View>
                <View key="3">
                    <LiveChat goToHome={()=>this.viewPager.setPage(1)} {...this.props}/>
                </View>
            </ViewPager>
        );
    }
}
  
const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
    },
  });
//make this component available to the app
export default HomeScreen;
