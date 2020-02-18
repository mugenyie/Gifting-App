import React, { Component } from 'react';
import { Platform } from 'react-native';
import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base';
import Color from '../../common/Color';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Header searchBar rounded style={{backgroundColor:Platform.OS == "android" ? Color.PrimaryDark:""}}>
          <Item>
              <Icon name="search"/>
              <Input placeholder="Search for gifts" />
              <Icon name="gift"/>
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
      </Header>
    );
  }
}
