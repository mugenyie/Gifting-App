import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

import Config from '../../common/Config';
import Color from '../../common/Color';
const width = Dimensions.get('window').width;

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    hideSpinner=()=> {
    this.setState({ visible: false });
    }
    showSpinner=()=> {
    this.setState({ visible: true });
    }

      
  render() {
    return (
        <View style={{ flex: 1 }}>
        <WebView
          onLoadStart={() => (this.showSpinner())}
          onLoad={() => this.hideSpinner()}
          style={{ flex: 1 }}
          source={{ uri: Config.secureCheckout }}
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