import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Searchbar } from 'react-native-paper';

// create a component
class ExploreScreen extends Component {
    state = {
        firstQuery: '',
      };
    
      render() {
        const { firstQuery } = this.state;
        return (
          <Searchbar
            placeholder="Search for a gift / shop"
            onChangeText={query => { this.setState({ firstQuery: query }); }}
            value={firstQuery}
          />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ExploreScreen;
