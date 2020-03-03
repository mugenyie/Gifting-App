import React, { Component } from 'react';
import { View, Text, StyleSheet, Share, Platform } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content, Icon} from 'native-base';
import mainStyles from '../../common/mainStyles';
import Color from '../../common/Color';
import ButtonOutline from '../../components/ButtonOutline';

const iosLink = 'https://www.giftsery.com/ios';
const androidLink = 'https://www.giftsery.com/android'

class AboutUs extends Component {
    onShare = async () => {
        try {
          const result = await Share.share({
              title:'Download Giftsery APP',
              message:`Share gifts with loved ones on Giftsery ${Platform.OS == 'ios' ? iosLink : androidLink}`,
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

  render() {
    return (
      <Container style={styles.container}>
        <Text style={[mainStyles.Heading1,{textAlign:'center'}]}>
            Giftsery let's you easily send a gift to your loved one, friends and family on the go!
        </Text>

        <ButtonOutline 
        title="Share App" iconName="sharealt" onPress={this.onShare} marginTop={50} buttonStyle={{}}
        />

      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AboutUs;
