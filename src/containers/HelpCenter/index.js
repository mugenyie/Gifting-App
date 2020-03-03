import React, { Component } from 'react';
import { View, Text, StyleSheet, Share, Platform, Dimensions, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content, Icon} from 'native-base';
import { SignOutUser, GetUserData } from '../../services/UserAuthManager';
import mainStyles from '../../common/mainStyles';
import Color from '../../common/Color';

const height = Dimensions.get('window').height;

class HelpCenter extends Component {

    state ={
        displayName : 'There'
      }

    _pressCall=()=>{
        const url='tel://+256777415239'
        Linking.openURL(url)
    }

    _pressWhatsApp=()=>{
        const url='https://wa.me/256777415239'
        Linking.openURL(url)
    }

    _pressEmail=()=>{
        const url='mailto:support@giftsery.com?Subject=Giftsery%20Support'
        Linking.openURL(url)
    }

    _pressWebsite=()=>{
        const url='https://www.giftsery.com'
        Linking.openURL(url)
    }

    async componentDidMount(){
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                this.setState({ 
                    displayName: userInfo.displayName
                })
            }else{
                // Lock out the user
            }
        })
        .catch(error => {
            alert(error);
        });
    }

  render() {
    return (
      <Container style={styles.container}>
          <Text style={[mainStyles.Heading1,{textAlign:'center',flex:0.2}]}>
              Hi <Text style={mainStyles.Heading1Light}>{this.state.displayName}</Text>, we're here to help
          </Text>

          <View style={{flex:0.8, alignItems:'center'}}>
            <View style={{flexDirection:'row',marginTop:height*0.05}}>
                <View style={{flex:0.2}}>
                    <Icon name="call" />
                </View>
                <TouchableOpacity onPress={() => this._pressCall()} style={[{flex:0.8}]}>
                    <Text style={mainStyles.Heading1}>(+256) 777 415 239</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginTop:40}}>
                <View style={{flex:0.2}}>
                    <Icon name="logo-whatsapp" />
                </View>
                <TouchableOpacity onPress={() => this._pressWhatsApp()} style={[{flex:0.8}]}>
                    <Text style={mainStyles.Heading1}>(+256) 777 415 239</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginTop:40}}>
                <View style={{flex:0.2}}>
                    <Icon name="mail" />
                </View>
                <TouchableOpacity onPress={() => this._pressEmail()} style={[{flex:0.8}]}>
                    <Text style={mainStyles.Heading1}>support@giftsery.com</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginTop:40}}>
                <View style={{flex:0.2}}>
                    <Icon name="globe" />
                </View>
                <TouchableOpacity onPress={() => this._pressWebsite()} style={[{flex:0.8}]}>
                    <Text style={mainStyles.Heading1}>www.giftsery.com</Text>
                </TouchableOpacity>
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
        paddingTop: height*0.08,
        paddingLeft:20,
        paddingRight:20
    },
});

export default HelpCenter;
