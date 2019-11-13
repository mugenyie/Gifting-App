//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Button} from 'native-base';

import ProductListItem from '../ProductListItem';
import SectionTitle from '../SectionTitle';

import mainStyles from '../../common/mainStyles';

const imageSource1 = require('../../../assets/teddy.jpg');
// create a component
class DealsForYou extends Component {
    render() {
        const {productNavigation} = this.props;
        return (
            <View style={styles.container}>
                <SectionTitle title="Giftsery picks for you" subtitle="Top recommendations for you today." />

                <View style={{paddingLeft: 20,paddingRight: 20,}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                        </View>
                </View>
                <TouchableOpacity style={[{justifyContent:'center', alignItems:'center', alignSelf:'center', borderWidth:0.5,borderRadius:8, borderColor: '#ddd', width:'50%', height:40, margin:10}]}>
                    <Text style={mainStyles.TextRegular}>Load more</Text>
                </TouchableOpacity>
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
