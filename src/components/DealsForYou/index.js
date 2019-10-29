//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProductListItem from '../ProductListItem';

const imageSource1 = require('../../../assets/teddy.jpg');
// create a component
class DealsForYou extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:24,fontWeight:'bold',textAlign:'left',paddingBottom:10}}>Giftsery picks for you</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
                    <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                    <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                    <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                    <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingTop:20,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:'column',
    },
});

//make this component available to the app
export default DealsForYou;
