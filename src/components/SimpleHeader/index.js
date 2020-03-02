import React, { Component } from 'react';
import {TouchableOpacity,View} from 'react-native';
import Color from '../../common/Color';
import MainStyles from '../../common/mainStyles';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';

export default class SimpleHeader extends Component {

  render() {
      const {headerTitle} = this.props;
    return (
        <Header androidStatusBarColor={Color.PrimaryDark} style={{backgroundColor:'#fff'}}>
            <Left>
                <Button onPress={() => this.props.navigation.goBack()} transparent>
                    <Icon style={{color:Color.LightRose,fontSize:28}} name='arrow-back' />
                    {Platform.OS == 'ios'?(<Text style={[MainStyles.TextRegular,{color:Color.LightRose,fontSize:18,paddingLeft:15,top:-1}]}>Back</Text>):(<View />)}
                </Button>
            </Left>
            <Body>
                <Title style={{fontSize:18,fontFamily:'Montserrat-Regular',fontWeight:'400'}}>{headerTitle}</Title>
            </Body>
            <Right />
        </Header>
    );
  }
}
