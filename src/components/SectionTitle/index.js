//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../../common/mainStyles';

// create a component
class SectionTitle extends Component {

    render() {
        const {styles, title, subtitle, seeMore} = this.props;

        let moreButton;
        let subtitleText;
        if(seeMore){
            moreButton = <TouchableOpacity style={{marginLeft:'auto'}}>
                            <Text style={[mainStyles.TextRegular, {color:'#6496c6', fontWeight:'bold'}]}>{seeMore}</Text>
                        </TouchableOpacity>;
        }
        if(subtitle){
            subtitleText = <Text style={[mainStyles.Heading3Light,styles,{marginTop:2}]}>{subtitle}</Text>;
        }
        
        return (
            <View style={{flex:1,flexDirection:'column',padding:10,paddingBottom:10,alignContent:'flex-start'}}>
                <View style={{flexDirection: 'row', alignItems:'baseline'}}>
                    <Text style={[mainStyles.Heading2,styles]}>{title}</Text>
                    {moreButton}
                </View>
                {subtitleText}
            </View>
        );
    }
}

//make this component available to the app
export default SectionTitle;
