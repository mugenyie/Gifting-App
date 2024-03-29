//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';
import ActivityLoader from '../../components/ActivityLoader';
import { firebase } from '@react-native-firebase/auth';

import AccountAPI from '../../services/AccountAPI';
import { GetUserData, StoreUserData } from '../../services/UserAuthManager';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import Icon from 'react-native-vector-icons/AntDesign';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

// create a component
class EditProfile extends Component {

    constructor(){
      super();
      this.state = {
        phoneNumber: "",
        gender: 0,
        birthMonth: 0,
        birthDay: 0,
        displayName: "",
        email: "",
        updateInProgress: false
      }
    }

    async componentDidMount(){
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                this.setState({ 
                  phoneNumber: userInfo.phoneNumber,
                  gender: userInfo.gender,
                  birthMonth: userInfo.birthMonth,
                  birthDay: userInfo.birthDay,
                  displayName: userInfo.displayName,
                  email: userInfo.email,
                })
            }else{
                // Lock out the user
            }
        })
        .catch(error => {
            alert(error);
        });
    }

  validateName = () => {
    let name = this.state.displayName;
    if(name.length < 1){
        return false;
    }
    return true;
  }

  validateEmail = () => {
    var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(String(this.state.email).toLowerCase());
  }
    
  updateUserRecord = async () => {
    if(this.validateName()){
      await firebase.auth().currentUser.updateProfile({displayName: this.state.displayName});
    }else{
      throw("Name cannot empty")
    }

    if(this.validateEmail()){
      await firebase.auth().currentUser.updateEmail(this.state.email);
    }else{
      throw("Invalid Email")
    }
  }

  updateUser = () => {
    this.setState({updateInProgress:true});
    this.updateUserRecord().then(() => {

      AccountAPI.Update({
        "phoneNumber": this.state.phoneNumber,
        "displayName": this.state.displayName,
        "email": this.state.email,
        "gender": this.state.gender,
        "birthMonth": this.state.birthMonth,
        "birthDay": this.state.birthDay
      }).then(data => {
        StoreUserData(data.body)
        .then(() => {
          alert("Update succesful");
          this.setState({updateInProgress:false});
        }).catch(error => {
          alert(error)
        })
      })
      
    }).catch(error => {
      alert(error);
      this.setState({updateInProgress:false});
    })
  }


    render() {
        const {updateInProgress} = this.state;
        return (
            <Container>

                <Content style={styles.container}>

                    <ActivityLoader display={updateInProgress} />

                    <Text style={[mainStyles.TextRegular,{fontSize:15}]}>Display name</Text>
                    <TextInput
                    style={styles.textInput}
                    value={this.state.displayName}
                    keyboardType='default'
                    onChangeText={displayName => {
                        this.setState({ displayName })
                    }}
                    />

                    <View style={{padding:20}}/>

                    <Text style={[mainStyles.TextRegular,{fontSize:15}]}>Email</Text>
                    <TextInput
                    style={styles.textInput}
                    value={this.state.email}
                    keyboardType='default'
                    onChangeText={email => {
                        this.setState({ email })
                    }}
                    />

                    <Button style={{
                        backgroundColor:Color.PrimaryDark, 
                        marginTop:40,
                        padding:8, alignItems:'center',justifyContent:'center'}} 
                        onPress={() => this.updateUser()}>
                    <Text style={[mainStyles.Heading3, {color:'#FFF'}]}>Update Details</Text>
                    </Button>
                </Content>

            </Container>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:10,
        marginRight:10,
        marginTop:40
    },
    textInput: {
        marginTop: 20,
        height: 40,
        width:'100%',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        borderRadius: 4,
        paddingLeft: 10,
        color: '#000',
        fontSize: 20,
        fontFamily:'Montserrat-Light'
      },
      loading: {
        flex:1,
        elevation:1,
        backgroundColor:'rgba(255,255,255, 0.5)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
});

//make this component available to the app
export default EditProfile;
