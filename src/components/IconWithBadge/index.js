//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Footer, FooterTab, Button } from 'native-base';

import Color from '../../common/Color';

export default class IconWithBadge extends Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ }}>
          <Icon name={name} size={size} color={color} />
          {badgeCount > 0 && (
            <View
              style={{
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'orange',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
  }