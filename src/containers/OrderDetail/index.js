import React, { Component } from 'react';
import {View,Text} from 'react-native';
import StepIndicator from 'react-native-step-indicator';

import mainStyles from '../../common/mainStyles';


const labels = ["ORDER RECEIVED","PREPARATION","IN TRANSIT","DELIVERED"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize:30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}


// create a component
class OrderDetail extends Component {
    state={
        currentPosition:0
    }


    render() {
        return (
            <View style={{flex:1}}>
                <View style={{justifyContent:'center',alignItems:'center',flex:0.4}}>
                    <Text style={mainStyles.Heading1}>Dieseil Watch</Text>
                    <Text style={mainStyles.Heading3}>Amount Paid: <Text style={mainStyles.Heading3Light}>UGX 5,000</Text></Text>
                    <Text style={mainStyles.Heading3}>Date Gifted: <Text style={mainStyles.Heading3Light}>6th June 2019</Text></Text>
                </View>
                
                <View style={{flex:0.2}}>
                    <StepIndicator
                    stepCount={4}
                    customStyles={customStyles}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                    />
                </View>

                <View style={{flex:0.4,marginRight:20,marginLeft:20}}>
                <Text style={mainStyles.Heading4}>Recipient: <Text style={mainStyles.TextRegular}>Cherie</Text></Text>
                <Text style={mainStyles.Heading4}>Message: <Text style={[mainStyles.TextRegular,{fontStyle:'italic'}]}>i Love you</Text></Text>
                <Text style={mainStyles.Heading4}>Expected Delivery Time: <Text style={mainStyles.TextRegular}>12:0PM</Text></Text>
                </View>
            </View>
        )
    }
    
}

//make this component available to the app
export default OrderDetail;
