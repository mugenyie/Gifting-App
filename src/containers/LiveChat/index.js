//import liraries
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

// create a component
class LiveChat extends Component {
    render() {
        return (
            <WebView source={{ uri: 'https://www.giftsery.com/chat.html' }} />
        );
    }
}


//make this component available to the app
export default LiveChat;
