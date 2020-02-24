import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import Color from '../../common/Color';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class ActivityLoader extends Component {
  render() {
      const {display} = this.props
    return (
        <View style={display && styles.loading}>
            {
                display &&
                <ActivityIndicator style={styles.loading} size={width*0.18} color={Color.LightRose} />
            }
        </View>
    );
  }
}

const styles = StyleSheet.create({
    loading: {
        flex:1,
        elevation:1,
        backgroundColor:'rgba(255,255,255, 0.5)',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default ActivityLoader;
