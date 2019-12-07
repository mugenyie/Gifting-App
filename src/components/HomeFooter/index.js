//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Footer, FooterTab, Button } from 'native-base';

import Color from '../../common/Color';

import IconWithBadge from '../IconWithBadge';


class HomeFooter extends Component {
    ActiveColor = (ActiveRoute, ButtonName) => {
        if(ActiveRoute == ButtonName){
            return Color.primaryDark;
        }else{
            return 'rgba(21,52,78, 0.65)';
        }
    };
    
  render() {
    return (
        <Footer>
          <FooterTab style={{backgroundColor:'#ffffff', elevation: 10}}>
            <Button onPress={() => {this.props.navigation.navigate("Home")}}>
                <Icon name={"home"} size={25} color={this.ActiveColor(this.props.RouteName, "Home")} />
            </Button>
            <Button onPress={() => {this.props.navigation.navigate("Explore")}}>
                <Icon name={"search1"} size={25} color={this.ActiveColor(this.props.RouteName, "Explore")} />
            </Button>
            <Button onPress={() => {this.props.navigation.navigate("GiftBox")}}>
                <IconWithBadge color={this.ActiveColor(this.props.RouteName, "GiftBox")} name={"gift"} size={25} badgeCount={3} />
            </Button>
            <Button onPress={() => {this.props.navigation.navigate("Saved")}}>
                <Icon name={"heart"} size={25} color={this.ActiveColor(this.props.RouteName, "Saved")} />
            </Button>
            <Button onPress={() => {this.props.navigation.navigate("Profile")}}>
                <Icon name={"user"} size={25} color={this.ActiveColor(this.props.RouteName, "Profile")} />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default HomeFooter;
