import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Text, Content} from 'native-base';
import Color from '../../common/Color';
import MainStyles from '../../common/mainStyles';

const screenWidth = Dimensions.get('window').width;

export default class ButtonOutline extends Component {
  render() {
      const {title, iconName, onPress, marginTop, buttonStyle} = this.props;
    return (
    <Button onPress={onPress} transparent style={[{padding:10, width:screenWidth*0.5,justifyContent:"space-evenly",alignContent:"center",borderColor:Color.PrimaryDark,borderWidth:1,borderRadius:4,marginTop:marginTop},buttonStyle]}>
        <Icon name={iconName} size={20} color={Color.PrimaryDark}/>
        <Text style={[MainStyles.Heading1,{fontSize:14,textTransform:'uppercase',color:Color.PrimaryDark}]}>{title}</Text>
    </Button>
    );
  }
}
