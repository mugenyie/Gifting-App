import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Content } from 'native-base';
import SearchBar from '../../components/SearchBar';

// create a component
class ExploreScreen extends Component {
    state = {
        query: '',
      };
    
      render() {
        const { query } = this.state;
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
