//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SectionTitle from '../SectionTitle';

// create a component
class MostPopular extends Component {
    render() {
        return (
            <SectionTitle title="Most popular" more="See all.." />
        );
    }
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default MostPopular;
