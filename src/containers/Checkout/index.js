import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { RaveWebView } from './RaveWebView';

import Config from '../../common/Config';
import Color from '../../common/Color';
const width = Dimensions.get('window').width;

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          visible: true, 
          transactionObject: null, 
          transactionComplete: false,
          amount: 0,
          phone: "+256",
          email: "" 
        };
    }

    
    componentDidMount(){
      this.setState({
        transactionObject: this.props.navigation.getParam('transactionMessage', 'NO-TRANSACTION'),
        amount: this.props.navigation.getParam('amount', 0),
        phone: this.props.navigation.getParam('phone', '+256'),
        email: this.props.navigation.getParam('email', '')
      })
    }

    hideSpinner=()=> {
    this.setState({ visible: false });
    }
    showSpinner=()=> {
    this.setState({ visible: true });
    }

    sendTransactionInfo = () => {
      let transactionMessage = JSON.stringify(this.state.transactionObject);
      alert(transactionMessage);
      this.webview.postMessage(transactionMessage);
      this.hideSpinner();
    }

    onTrasactionComplete = () => {
      alert("Success")
    }

    onTrasactionFailure = () => {
      alert("Failed")
    }

    onTrasactionCanceled = () => {
      alert("Canceled")
    }

    onMessage(data) {
      //Prints out data that was passed.
      alert(data);
      console.log(data);
    }
      
  render() {
    return (
        <View style={{ flex: 1 }}>
        <WebView
          ref="webview"
          onMessage={this.onMessage}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
          onNavigationStateChange={(event) => {
            alert(JSON.stringify(event.url))
          }}
          style={{ flex: 1 }}
          source={{ 
            uri: Config.secureCheckout 
            + "?amount="+this.state.amount
            + "&phoneNumber="+this.state.phone
            + "&email="+this.state.email
            + "&transactionMessage="+JSON.stringify(this.state.transactionObject) 
          }}
        />
        {this.state.visible && (
          <ActivityIndicator
          color={Color.primaryDark}
            style={{
            flex: 1,
            elevation:1,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center' }}
            size="large"
          />
        )}
      </View>
    );
  }
}

export default Checkout;