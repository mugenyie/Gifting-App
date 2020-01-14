//import liraries
import React, { Component } from 'react';

import { GetUserData } from '../../services/UserAuthManager';
import HomeInitialScreen from '../HomeLandingScreen';

// create a component
class Main extends Component {

    state = { firstName: '', email: '', displayName: '', phone: '', userId: null }

    async componentDidMount(){
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                var fullName = userInfo.displayName; 
                var Names = fullName.split(" ");
                this.setState({firstName:Names[0], displayName: userInfo.displayName, email: userInfo.email, phone: userInfo.phone})
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
  
//make this component available to the app
export default Main;
