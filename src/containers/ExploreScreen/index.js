import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';

import HomeFooter from '../../components/HomeFooter';

// create a component
class ExploreScreen extends Component {
    state = {
        firstQuery: '',
      };
    
      render() {
        const { firstQuery } = this.state;
        return (
          <Container>
            <Searchbar
            placeholder="Search for a gift / shop"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}
            />
            <Content />
            <HomeFooter RouteName={"Explore"} {...this.props}/> 
          </Container>
        );
    }
}

//make this component available to the app
export default ExploreScreen;
