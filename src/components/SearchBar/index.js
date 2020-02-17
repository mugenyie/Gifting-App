import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import {Platform} from 'react-native';
import Color from '../../common/Color';
export default class SearchBar extends Component {
  render() {
    return (
        <Header searchBar rounded style={{backgroundColor:Platform.OS == 'android' ? Color.primaryDark : ""}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search for a gift</Text>
          </Button>
        </Header>
    );
  }
}