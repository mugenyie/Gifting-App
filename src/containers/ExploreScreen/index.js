import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../../components/SearchBar';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';

// create a component
class ExploreScreen extends Component {
    state = {
        firstQuery: '',
      };
    
      render() {
        const { firstQuery } = this.state;
        return (
          <Container>
            <SearchBar />
            <Content />
          </Container>
        );
    }
}

//make this component available to the app
export default ExploreScreen;
