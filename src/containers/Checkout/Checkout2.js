//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {RaveWebView} from './RaveWebView';

// create a component
class Checkout2 extends Component {

    constructor(props) {
    super(props);

    }

    onSuccess(data) {
    alert("success", data);
    // You get the complete response returned from FlutterWave,
    // just incase you need more than the reference number

    }

    onCancel() {
        alert("error", 'Transaction was Cancelled!');
    }

    onError() {
    //an error occoured

    }

    uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }


    render() {
        return (
           <View  style={styles.container}>
             <RaveWebView
               buttonText=  "PAY NOW"
               raveKey="FLWPUBK_TEST-5b699f082fd4e8e41a9b52e7b883d1dc-X"
               amount={500}
               customerEmail={"team9.tech@gmail.com"}
               customerPhone={"08114089344"}
               transactionMetaData={"-----"}
               ActivityIndicatorColor="black"
               onCancel={this.onCancel}
               onSuccess={this.onSuccess}
               onError={() => { alert('something went wrong') }}
               btnStyles={{backgroundColor:'green', width:100, alignContent:  'center' }}
               textStyles={{ color:'white', alignSelf:  'center', }}
               txref={this.uuidv4()}
             />
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Checkout2;
