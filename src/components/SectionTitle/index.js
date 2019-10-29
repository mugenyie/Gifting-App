//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../common/mainStyles';

// create a component
class SectionTitle extends Component {
    render() {
        const {styles, title,more} = this.props;
        return (
            <View style={{flex:1,flexDirection:'row',padding:20}}>
                <Text style={[mainStyles.Heading2,styles,{flex:1,textAlign:'left'}]}>{title}</Text>
                <TouchableOpacity activeOpacity={0.4}><Text style={[mainStyles.TextCaption, {justifyContent:'flex-end',textAlign:'right', paddingTop:4}]}>{more}</Text></TouchableOpacity>
            </View>
        );
    }
}

//make this component available to the app
export default SectionTitle;
