//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Button} from 'native-base';

import ProductListItem from '../ProductListItem';
import SectionTitle from '../SectionTitle';

import mainStyles from '../../common/mainStyles';
import Color from '../../common/Color';

const imageSource1 = require('../../../assets/teddy.jpg');
// create a component
class DealsForYou extends Component {
    render() {
        const {productNavigation} = this.props;
        return (
            <View style={styles.container}>
                <SectionTitle title="Giftsery picks for you" subtitle="Top recommendations for you today." />

                <View style={{paddingLeft: 10,paddingRight: 10,paddingTop:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}} />
                            <ProductListItem navigateToProduct={() => productNavigation("Product")} product={{name:"Woolen Teddy Baer",imageSource:imageSource1,price:"Ushs. 16,500"}}/>
                        </View>
                </View>
                <Button transparent style={[{flex:1,flexDirection:'row',alignSelf:'center',height:40,marginTop:20, justifyContent:"center",alignContent:"center", flexDirection:"row",borderColor:Color.primaryDark,borderWidth:0.5,borderRadius:2,padding:4, width:'50%'}]}>
                    <Text style={mainStyles.TextRegular}>Load more</Text>
                </Button>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection:'column'
    },
});

//make this component available to the app
export default DealsForYou;
