//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProductListItem from '../ProductListItem';
import SectionTitle from '../SectionTitle';

import mainStyles from '../../common/mainStyles';

const imageSource1 = require('../../../assets/teddy.jpg');
// create a component
class DealsForYou extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionTitle title="Giftsery picks for you" more="See all.." />

                <View style={{paddingLeft: 20,paddingRight: 20,}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
                            <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                            <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                            <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                            <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                        </View>
                </View>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
    },
});

//make this component available to the app
export default DealsForYou;
