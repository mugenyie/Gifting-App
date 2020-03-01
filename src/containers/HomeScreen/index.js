//import liraries
import React, { Component } from 'react';
import { GetUserData,SignOutUser } from '../../services/UserAuthManager';
import HomeInitialScreen from '../HomeLandingScreen';

// create a component
class HomeScreen extends Component {

    state = { firstName: '', email: '', displayName: '', phone: '', userId: null }

    async componentDidMount(){
        await GetUserData()
        .then(userInfo => {
            console.log(userInfo)
            let displayNameList = userInfo.displayName.split(" ");
            this.setState(
                {
                    firstName:displayNameList[0], 
                    displayName: userInfo.displayName, 
                    email: userInfo.email, 
                    phone: userInfo.phone
                })
        })
        .catch(error => {
            alert(error);
            SignOutUser()
            .then(() => {
                this.props.navigation.navigate('PhoneAuthScreen');
            }).catch(error => {
                alert(error);
            })
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
  
//make this component available to the app
export default HomeScreen;
