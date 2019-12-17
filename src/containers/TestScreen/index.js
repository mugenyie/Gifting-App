//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class TestScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Text>
                    Transaction Message: {JSON.stringify(navigation.getParam('transactionMessage', 'NO-TRANSACTION'))}
                    amount: {this.props.navigation.getParam('amount', 0)},
                    phone: {this.props.navigation.getParam('phone', '+256')},
                    email: {this.props.navigation.getParam('email', '')}
                </Text>
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
        backgroundColor: '#FFFFFF',
    },
});

//make this component available to the app
export default TestScreen;
