//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';

import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';

import { SignOutUser, GetUserData } from '../../services/UserAuthManager';
import Icon from 'react-native-vector-icons/Ionicons';
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
        await GetUserData()
        .then(userInfo => {
            if(userInfo){

                //var time2 = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
                var time3 = new Date(userInfo.creationTime);
                var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
                this.setState({ 
                    displayName: userInfo.displayName, 
                    email: userInfo.email, 
                    phone: userInfo.phone, 
                    creationTime: months[time3.getMonth()] +" "+ time3.getDay() + ", "+ time3.getFullYear()
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
                <Header androidStatusBarColor={Color.PrimaryDark} style={{backgroundColor:"#fff",paddingLeft:20,paddingBottom:4,paddingTop:2,height:80}}>
                    <Left>
                        <Text style={mainStyles.Heading1}>{this.state.displayName}</Text>
                    </Left>
                    <Body>
                    <Text style={mainStyles.Heading3Light}>Joined on {this.state.creationTime}</Text>
                    </Body>
                </Header>

                <View style={styles.container}>

                    <View style={{flex:0.9,justifyContent:'flex-start', alignItems:'flex-start'}}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("EditProfile")} style={styles.profileHeader}>
                            <View style={styles.leftHeader}>
                                <Text style={styles.titleText}>Personal information</Text>
                            </View>
                            <View style={styles.rightIcon} >
                                <Icon style={styles.titleIcon} name="md-person" size={25}/>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.titleSeparator}/>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("OrderHistory")} style={styles.profileHeader}>
                            <View style={styles.leftHeader}>
                                <Text style={styles.titleText}>Orders</Text>
                            </View>
                            <View style={styles.rightIcon} >
                                <Icon2 style={styles.titleIcon} name="list" size={25}/>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.titleSeparator}/>

                        <TouchableOpacity onPress={() => this.SignOut()}>
                            <Text style={[mainStyles.Heading3Light,{fontSize:18, color:'#5e5e5e'}]}>
                                <Text>Log out</Text>
                            </Text>
                        </TouchableOpacity>
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
