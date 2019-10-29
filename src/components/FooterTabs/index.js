//import liraries
import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Footer, FooterTab, Button, Text, Badge} from 'native-base';

import mainStyles from '../../common/mainStyles';
import Color from '../../common/Color';

// create a component
class FooterTabs extends Component {
    render() {
        return (
        <Footer>
          <FooterTab style={{backgroundColor:"#fff", borderTopColor:"#ccc", borderTopWidth:0.4, paddingTop:10}}>
            <Button vertical style={[styles.footerButton]}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="home" />
              <Text style={mainStyles.IconText}>Discover</Text>
            </Button>
            <Button vertical style={[styles.footerButton]}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="search" />
              <Text style={mainStyles.IconText}>EXPLORE</Text>
            </Button>
            <Button badge vertical style={[styles.footerButton]}>
              <Badge style={{ marginBottom:-16,marginLeft:30, position:'absolute'}}><Text>2</Text></Badge>
              <Icon color={Color.primaryDark} size={28} style={styles.footerIcon} name="gift" />
              <Text style={mainStyles.IconText}>GIFTBOX</Text>
            </Button>
            <Button vertical style={[styles.footerButton]}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="heart" />
              <Text style={mainStyles.IconText}>SAVED</Text>
            </Button>
            <Button vertical style={styles.footerButton}>
              <Icon color={Color.primaryDark} size={26} style={styles.footerIcon} name="user" />
              <Text style={mainStyles.IconText}>PROFILE</Text>
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
    }
});

//make this component available to the app
export default FooterTabs;
