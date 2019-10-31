//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../common/mainStyles';

// create a component
class SectionTitle extends Component {

    render() {
        const {styles, title, subtitle} = this.props;
        
        return (
            <View style={{flex:1,flexDirection:'column',padding:20,alignContent:'flex-start'}}>
                <Text style={[mainStyles.Heading2,styles]}>{title}</Text>
                <Text style={[mainStyles.Heading3Light,styles,{marginTop:10}]}>{subtitle}</Text>
            </View>
        );
    }
}

//make this component available to the app
export default SectionTitle;
