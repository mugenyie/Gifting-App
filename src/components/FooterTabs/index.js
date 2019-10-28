//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Footer, FooterTab, Button, Text, Badge} from 'native-base';

import Color from '../../common/Color';

// create a component
class FooterTabs extends Component {
    render() {
        return (
        <Footer>
          <FooterTab style={{backgroundColor:"#fff", borderTopColor:"#ccc", borderTopWidth:0.4, paddingTop:10}}>
            <Button vertical style={[styles.footerButton]}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="home" />
              <Text style={styles.footerText}>Discover</Text>
            </Button>
            <Button vertical style={[styles.footerButton]}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="search" />
              <Text style={styles.footerText}>EXPLORE</Text>
            </Button>
            <Button badge vertical style={[styles.footerButton]}>
              <Badge style={{ marginBottom:-16,marginLeft:30, position:'absolute'}}><Text>2</Text></Badge>
              <Icon color={Color.primaryDark} size={28} style={styles.footerIcon} name="gift" />
              <Text style={styles.footerText}>GIFTBOX</Text>
            </Button>
            <Button vertical style={[styles.footerButton]}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="heart" />
              <Text style={styles.footerText}>SAVED</Text>
            </Button>
            <Button vertical style={styles.footerButton}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="user" />
              <Text style={styles.footerText}>PROFILE</Text>
            </Button>
          </FooterTab>
        </Footer>
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
    footerIcon:{
      
    },
    footerButton:{
      borderRadius:0
    },
    footerText: {fontSize:8,fontWeight:'bold',color:"#15344e"}
});

//make this component available to the app
export default FooterTabs;
