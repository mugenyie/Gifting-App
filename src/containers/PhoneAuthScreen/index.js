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
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  Platform,
  Item, Picker
} from 'react-native'
import { firebase } from '@react-native-firebase/auth';
import { Container, Header, Left, Body,Button, Right, Title, Content, ListItem,Icon} from 'native-base';
import {cleanPhone} from '../../helpers';
import AccountAPI from '../../services/AccountAPI';
import { StoreUserData } from '../../services/UserAuthManager';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import ActivityLoader from '../../components/ActivityLoader';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SplashIconWidth = width * 0.2;
const LogoIcon = require('../../../assets/icon.png')


class PhoneAuthScreen extends Component {
  constructor(){
    super();

    this.state = {
      phone: '+256',
      email: '',
      isSigninInProgress: false,
      displayName: '',
      gender:0,
      confirmResult: null,
      verificationCode: '',
      userId: '',
      firebaseAuth: false,
      profileComplete: false
    }
  }
  

  async componentDidMount(){
    this.setState({isSigninInProgress:true});
    
    await this.getOAuthLoggIn();
    let phone = cleanPhone(this.state.phone);

    if(phone.length > 5){
      await AccountAPI.GetByPhonenumber(phone)
      .then(data => {
        console.log(data)
        if(data.statusCode == 404){

          this.checkProfileComplete();

          if(this.state.profileComplete == true){
            console.log('create profile')
            AccountAPI.Create({
              "phoneNumber": phone,
              "displayName": this.state.displayName,
              "email": this.state.email,
              "gender": this.state.gender,
            })
            .then(data => this.goToHome(data.body))
            .catch(err => alert(err))
          }
          return;
        }
        if(data.body.customerId){
          this.goToHome(data.body);
          return;
        }else{
          alert("Error signing in");
        }
      })
      .catch(error => alert(error))
    }else{
      this.setState({firebaseAuth: false})
      this.setState({isSigninInProgress:false});
    }
  }

  componentWillUnmount() {
    this.setState({isSigninInProgress:false});
  }

  goToHome = (data) => {
    StoreUserData(data)
    .then(() => this.props.navigation.navigate('Home'))
    .catch(err => alert(err))
  }

  getOAuthLoggIn = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({
          firebaseAuth: true, 
          phone: user.phoneNumber,
          userId: user.uid,
          email: user.email, 
          displayName: user.displayName
        });
      }
    })
  }

  checkProfileComplete = () => {
    if(this.state.phone && this.state.displayName && this.state.email){
      this.setState({profileComplete:true});
    }else{
      this.setState({profileComplete:false});
    }
  }

  createUser = () => {
    this.setState({isSigninInProgress:true});
    this.updateUserRecord()
    .then(() => {
      this.setState({profileComplete:true});
      let phone = cleanPhone(this.state.phone);
      AccountAPI.Create({
        "phoneNumber": phone,
        "displayName": this.state.displayName,
        "email": this.state.email,
        "gender": this.state.gender,
      })
      .then(data => this.goToHome(data.body))
      .catch(err => {throw err})
    })
    .catch(err => alert(err))
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
      this.setState({ confirmResult: null, verificationCode: '', firebaseAuth:false });
      this.setState({isSigninInProgress:false});
    })
    .catch(error => {
      alert(error);
      this.setState({isSigninInProgress:false});
    })
    
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
            firebaseAuth: true,
            phone: user.phoneNumber,
            userId: user.uid,
            email: user.email, 
            displayName: user.displayName
          });
          //get user, if not exists show
          AccountAPI.GetByPhonenumber(user.phoneNumber.substring(1))
          .then(data => {
            if(data.body.customerId){
              StoreUserData(data.body);
              this.props.navigation.navigate("Home");
            }
          })
          .catch(err => alert(err))
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

  _renderRegisterView = () => {
    return (
      <View style={{marginLeft:10,marginRight:10}}>
        <Text style={[mainStyles.Heading2Light,{textAlign:'center'}]}>
          Your account is almost set up, a few more details to get you started
        </Text>

        <Text style={[mainStyles.Heading4,{fontSize:14,paddingTop:20,marginBottom:20}]}> 
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
        
        <Picker
          note
          mode="dropdown"
          style={{width:undefined}}
          selectedValue={this.state.gender}
          onValueChange={value => this.setState({gender:value})}
        >
          <Picker.Item label="Select Gender" value={0} />
          <Picker.Item label="Male" value={1} />
          <Picker.Item label="Female" value={2} />
          <Picker.Item label="Prefer Not to Say" value={3} />
        </Picker>
        
        <Button style={{backgroundColor:Color.PrimaryDark, padding:8,marginTop:10, alignItems:'center',justifyContent:'center'}} onPress={() => this.createUser()}>
          <Text style={[mainStyles.Heading3, {color:'#FFF'}]}>Submit Details</Text>
        </Button>
      </View>
    )
  }

  renderUnConfirmedView = () => {
    return(
      <View>
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
    const {firebaseAuth, isSigninInProgress, confirmResult} = this.state;

    const bodyRendered = firebaseAuth ? this._renderRegisterView() : this.renderUnConfirmedView();

    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
            >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
              {
                Platform.OS == 'android' ? <Header transparent androidStatusBarColor={Color.PrimaryDark}/> : <View />
              }
              
              <Content style={{paddingLeft:20,paddingRight:20,paddingTop:height*0.1}}>
                
                <ActivityLoader display={isSigninInProgress}/>
                {
                  !confirmResult && !firebaseAuth &&
                  <View style={{paddingBottom:80}}>
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
              </Content>
            </Container>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
    backgroundColor: Color.PrimaryDark,
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
