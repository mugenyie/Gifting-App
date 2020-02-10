import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Image
} from 'react-native'
import { firebase } from '@react-native-firebase/auth';
import {Button} from 'native-base';
import { StoreUserData } from '../../services/UserAuthManager';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SplashIconWidth = width * 0.2;
const LogoIcon = require('../../../assets/icon.png')

class PhoneAuthScreen extends Component {
  state = {
    phone: '+256',
    email: '',
    isSigninInProgress: false,
    displayName: '',
    confirmResult: null,
    verificationCode: '',
    userId: '',
    isLoggedIn: false,
    profileComplete: false
  }
  

  async componentDidMount(){
    await this.checkIsLoggedIn();
  }

  validatePhoneNumber = () => {
    var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
    return regexp.test(this.state.phone)
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

  handleSignOut = () => {
    this.setState({isSigninInProgress:true});
    firebase.auth().signOut()
    .then( () =>{
      this.setState({ confirmResult: null, verificationCode: '', isLoggedIn:false });
      this.setState({isSigninInProgress:false});
    })
    .catch(error => {
      alert(error);
      this.setState({isSigninInProgress:false});
    })
    
  }

  updateUser = () => {
    this.setState({isSigninInProgress:true});
    this.updateUserRecord().then(() => {
      alert("Update succesful");
      this.setState({profileComplete:true});
      //update user storage
      StoreUserData({
        phone: this.state.phone,
        email: this.state.email,
        displayName: this.state.displayName,
        userId: this.state.userId,
        profileComplete: this.state.profileComplete,
      })
      .then(() => {
        this.setState({isSigninInProgress:false});
        this.props.navigation.navigate("Home");
      }).catch(error => {
        
      })
    }).catch(error => {
      alert(error);
      this.setState({isSigninInProgress:false});
    })
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

  checkProfileComplete = () => {
    if(this.state.phone && this.state.displayName && this.state.email){
      return true;
    }else{
      return false;
    }
  }

  checkIsLoggedIn = async () => {
    this.setState({isSigninInProgress:true});
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user && user.uid) {
        this.setState({
          isLoggedIn: true, 
          phone: user.phoneNumber,
          userId: user.uid,
          email: user.email, 
          displayName: user.displayName
        });
        console.log(user);
        this.setState({profileComplete:this.checkProfileComplete()});

        //update user storage
        await StoreUserData({
          phone: this.state.phone,
          email: this.state.email,
          displayName: this.state.displayName,
          userId: this.state.userId,
          profileComplete: this.state.profileComplete,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime
        });
        
        if(this.state.profileComplete){
          this.props.navigation.navigate("Home");
        }

        this.setState({isSigninInProgress:false});

      }else{
        this.setState({isLoggedIn: false})
        this.setState({isSigninInProgress:false});
        console.log("Logged Out");
      }
    });
  }

  handleSendCode = () => {
    // Request to send OTP
    this.setState({isSigninInProgress:true});
    if (this.validatePhoneNumber()) {
      firebase
        .auth()
        .signInWithPhoneNumber(this.state.phone)
        .then(confirmResult => {
          this.setState({ confirmResult })
          this.setState({isSigninInProgress:false});
        })
        .catch(error => {
          alert(error.message)

          console.log(error);
          this.setState({isSigninInProgress:false});
        })
    } else {
      alert('Invalid Phone Number');
      this.setState({isSigninInProgress:false});
    }
  }

  changePhoneNumber = () => {
    this.setState({ confirmResult: null, verificationCode: '' })
  }

  handleVerifyCode = () => {
    // Request for OTP verification
    this.setState({isSigninInProgress:true});
    const { confirmResult, verificationCode } = this.state
    if (verificationCode.length == 6) {
      confirmResult
        .confirm(verificationCode)
        .then(user => {
          this.setState({
            isLoggedIn: true, 
            phone: user.phoneNumber,
            userId: user.uid,
            email: user.email, 
            displayName: user.displayName
          });
          this.setState({isSigninInProgress:false});
        })
        .catch(error => {
          alert(error.message)
          this.setState({isSigninInProgress:false});
          console.log(error)
        })
    } else {
      alert('Please enter a 6 digit OTP code.');
      this.setState({isSigninInProgress:false});
    }
  }

  renderConfirmationCodeView = () => {
    return (
      <View style={styles.verificationView}>
        <TextInput
        style={styles.textInput}
        placeholder='Verification code'
        placeholderTextColor='#000'
        value={this.state.verificationCode}
        keyboardType='numeric'
        onChangeText={verificationCode => {
          this.setState({ verificationCode })
        }}
        maxLength={6}
        />
        <TouchableOpacity
          style={[styles.themeButton, { marginTop: 10 }]}
          onPress={this.handleVerifyCode}>
          <Text style={[styles.themeButtonTitle,mainStyles.Heading2]}>Verify Code</Text>
        </TouchableOpacity>
        <View style={{marginBottom:50}}/>
      </View>
    )
  }

  renderLoggedInView = () => {
    return (
      <View style={{marginLeft:10,marginRight:10}}>
        <Text style={[mainStyles.Heading2Light,{textAlign:'center'}]}>
          Your account is almost set up, a few more details to get you started
        </Text>

        <Text style={[mainStyles.Heading4,{fontSize:14,paddingTop:20,marginBottom:40}]}> 
          <Text style={{fontWeight:'bold'}}>N.B</Text> Your Email will be used to send transactional receipts
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder='Email'
          placeholderTextColor='#555'
          value={this.state.email}
          keyboardType='email-address'
          onChangeText={email => {
            this.setState({ email })
          }}
        />

        <TextInput
          style={styles.textInput}
          placeholder='Display Name'
          placeholderTextColor='#555'
          value={this.state.displayName}
          keyboardType='default'
          onChangeText={displayName => {
            this.setState({ displayName })
          }}
        />

        <View style={{paddingTop:20}}/>
        <Button style={{backgroundColor:Color.primaryDark, padding:8, alignItems:'center',justifyContent:'center'}} onPress={() => this.updateUser()}>
          <Text style={[mainStyles.Heading3, {color:'#FFF'}]}>Update Details</Text>
        </Button>
        <View />
        <Button style={{justifyContent:'center',marginTop:'40%', borderRadius:2,borderColor:"#ccc",borderWidth:0.3}} onPress={() => this.handleSignOut()} transparent>
          <Text style={[mainStyles.Heading4,{paddingTop:30}]}>LogOut</Text>
        </Button>
      </View>
    )
  }

  renderUnConfirmedView = () => {
    return(
      <View style={styles.page}>
        <Text style={[mainStyles.Heading2Light,{fontSize:18,marginBottom:20}]}>
          {this.state.confirmResult ? 
          <Text>A one <Text style={{fontWeight:'bold'}}>One Time Password</Text> has be sent to your phone number for verification</Text>
          : 'Login with your phone number to get started'}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='Phone number with country code'
          placeholderTextColor='#555'
          keyboardType='phone-pad'
          value={this.state.phone}
          onChangeText={phone => {
            this.setState({ phone })
          }}
          maxLength={15}
          editable={this.state.confirmResult ? false : true}
        />

        <TouchableOpacity
          style={[styles.themeButton, { marginTop: 20 }]}
          onPress={
            this.state.confirmResult
              ? this.changePhoneNumber
              : this.handleSendCode
          }>
          <Text style={[styles.themeButtonTitle,mainStyles.Heading3]}>
            {this.state.confirmResult ? 'Change Phone Number' : 'Send verification Code'}
          </Text>
        </TouchableOpacity>

        {this.state.confirmResult ? this.renderConfirmationCodeView() : null}
      </View>
    )
  }

  render() {
    const {isLoggedIn, isSigninInProgress, confirmResult} = this.state;

    const bodyRendered = isLoggedIn == true ? this.renderLoggedInView() : this.renderUnConfirmedView();

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={[styles.container]}>
          {
            isSigninInProgress && 
            <View style={styles.loading}>
                <ActivityIndicator style={styles.loading} size={width*0.18} color={Color.primaryDark} />
            </View>
          }

          {
            !confirmResult && !isLoggedIn &&
            <View style={{marginBottom:80}}>
              <Image 
              style={{width:SplashIconWidth,height:SplashIconWidth,marginBottom:28}}
              resizeMode='contain'
              source={LogoIcon}
              />
              
              <Text style={[mainStyles.TextRegular,{fontSize:width*0.08}]}>Welcome to Giftsery.</Text>
              <Text style={[mainStyles.Heading4,{fontSize:width*0.06,marginTop:10}]}>A new gifting experience !</Text>  
            </View>
          }
          
          {bodyRendered}

        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft:20,
    marginRight:20,
    paddingTop:height*0.1,
    backgroundColor: '#FFFFFF',
  },
  page: {
    flex:0.8,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center'
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
    fontSize: 16,
  },
  themeButton: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primaryDark,
    borderRadius: 4,
    elevation:8
  },
  themeButtonTitle: {
    color: '#fff'
  },
  verificationView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50
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
})

export default PhoneAuthScreen
