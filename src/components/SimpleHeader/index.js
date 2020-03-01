import React, { Component } from 'react';
import {TouchableOpacity} from 'react-native';
import Color from '../../common/Color';
import MainStyles from '../../common/mainStyles';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base';

export default class SimpleHeader extends Component {

  render() {
      const {headerTitle} = this.props;
    return (
        <Header androidStatusBarColor={Color.PrimaryDark} style={{backgroundColor:'#fff'}}>
            <Left>
                <Button style={{paddingLeft:10}} onPress={() => this.props.navigation.goBack()} transparent>
                    <Icon name='arrow-back' />
                    <Text style={{paddingLeft:10}}>Back</Text>
                </Button>
            </Left>
            <Body>
                <Title style={[MainStyles.Heading1,{color:'#000',fontSize:18}]}>{headerTitle}</Title>
            </Body>
            <Right />
        </Header>
    );
  }
}
