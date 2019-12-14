//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { GetUserData } from '../../services/UserAuthManager';
import HomeInitialScreen from '../HomeLandingScreen';

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
            <HomeInitialScreen 
            customerName={this.state.firstName}
            {...this.props}
            />
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
