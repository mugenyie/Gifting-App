//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import { GetUserData } from '../../services/UserAuthManager';
import HomeInitialScreen from '../HomeLandingScreen';
import Birthdays from '../Birthdays';
import OrderHistory from '../OrderHistory';

// create a component
class Main extends Component {

    state = { email: '', fullName: '', firstName: '', userInfo: null, errorMessage: null }

    async componentDidMount(){
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                this.setState({fullName: userInfo.user.name, email: userInfo.user.email, firstName: userInfo.user.familyName})
            }else{
                this.setState({firstName:"There"})
            }
        })
        .catch(error => {
            alert(error);
            this.props.navigation.navigate("Loading");
        });
    }


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
                    customerName={this.state.firstName}
                    goToBirthday={()=>this.viewPager.setPage(0)} 
                    goToLiveChat={()=>this.viewPager.setPage(2)}
                    {...this.props}
                    />
                </View>
                <View key="3">
                    <OrderHistory goToHome={()=>this.viewPager.setPage(1)} {...this.props}/>
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
export default Main;
