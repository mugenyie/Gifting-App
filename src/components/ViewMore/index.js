//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import {Card} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import mainStyles from '../../common/mainStyles';

const width = Dimensions.get('window').width;
const itemWidth = width*0.8;

// create a component
class ViewMore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Card style={{width:100,height:100,borderRadius:100,elevation:5,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="arrow-right" size={26}/>
                        <Text style={mainStyles.TextRegular}>View more</Text>
                    </Card>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: itemWidth
    },
});

//make this component available to the app
export default ViewMore;
