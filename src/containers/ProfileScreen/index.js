//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content, Icon} from 'native-base';
import {NavigationEvents} from 'react-navigation';

import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';

import { SignOutUser, GetUserData } from '../../services/UserAuthManager';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Config from '../../common/Config';

// create a component
class ProfileScreen extends Component {

    state = {
        displayName: "",
        creationTime: "",
        email: "",
        phone: ""
    }

    async componentDidMount(){
        await this.fetchProfile()
    }

    fetchProfile = async () => {
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                var time3 = new Date(userInfo.createdOn);
                this.setState({ 
                    displayName: userInfo.displayName, 
                    email: userInfo.email, 
                    phone: userInfo.phone, 
                    creationTime: time3.toDateString()
                })
            }else{
                // Lock out the user
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    SignOut = () => {
        SignOutUser()
        .then(() => {
            this.props.navigation.navigate('PhoneAuthScreen');
        }).catch(error => {
            alert(error);
        })
    }

    render() {
        return (
            <Container style={{flex:1}}>
                <NavigationEvents
                onDidFocus={() => this.fetchProfile()}
                />
                <Header androidStatusBarColor={Color.PrimaryDark} style={{backgroundColor:"#fff",paddingBottom:4,height:Platform.OS=='android'?60:80}}>
                    <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <Text style={[mainStyles.Heading1,{fontSize:18}]}>{this.state.displayName}</Text>
                        <Text style={[mainStyles.Heading1Light,{fontSize:13}]}> Joined on {this.state.creationTime}</Text>
                    </View>
                </Header>

                <View style={styles.container}>

                    <View style={{flex:0.9,justifyContent:'flex-start', alignItems:'flex-start'}}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("EditProfile")} style={styles.profileHeader}>
                            <View style={styles.leftHeader}>
                                <Text style={styles.titleText}>Personal information</Text>
                            </View>
                            <View style={styles.rightIcon} >
                                <Icon name="person"/>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.titleSeparator}/>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("OrderHistory")} style={styles.profileHeader}>
                            <View style={styles.leftHeader}>
                                <Text style={styles.titleText}>Orders</Text>
                            </View>
                            <View style={styles.rightIcon} >
                                <Icon name="list"/>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.titleSeparator}/>

                        <Button style={{width:80}} transparent onPress={() => this.SignOut()}>
                            <Text style={[mainStyles.Heading2Light, {fontSize:18}]}>Log out</Text>
                            <Icon name="log-out" />
                        </Button>
                    </View>

                    

                    <View style={{justifyContent:'center',alignItems:'center', flex:0.1}}>
                        <Text style={[mainStyles.Heading4,{fontSize:14}]}>VERSION {Config.VERSION}</Text>
                    </View>

                </View>

                
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:10,
        marginTop:40
    },
    profileHeader: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    leftHeader: {
        flex: 0.9,
    },
    titleText: {
        fontSize:20, 
        fontFamily:'Montserrat-Light',
        color:'#555'
    },
    titleIcon: {
        color:'#555'
    },
    rightIcon: {
        flex: 0.1
    },
    titleSeparator: {
        borderWidth: 0.3,
        borderColor:'#CCC',
        width:'96%',
        marginTop:30,
        marginBottom:30
    }
});

//make this component available to the app
export default ProfileScreen;
