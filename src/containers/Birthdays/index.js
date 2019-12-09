import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title} from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
class Birthdays extends Component {
    render() {

        return (
            <Container>
            <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                {/* <Left>
                
                </Left> */}
                <Body style={{paddingLeft:10}}>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>Birthdays</Title>
                </Body>
                <Right>
                <Button onPress={() => this.props.goToHome()} transparent>
                    <Icon name='arrowright' size={22} color={Color.primaryDark}/>
                </Button>
                </Right>
            </Header>
            <View style={{flex:1,flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
                <Text style={mainStyle.Heading3}>No Birthdays yet</Text>
                <Text style={mainStyle.TextRegular}>Add them to get notified when the day comes</Text>
                <Button onPress={() => this.props.navigation.navigate("NewBirthday")} transparent style={{marginTop:20, width:100, height:40,justifyContent:"center",alignContent:"center", flexDirection:"row",borderColor:Color.primaryDark,borderWidth:0.5,borderRadius:2,padding:4}}>
                    <Icon name='plus' size={18} color={Color.primaryDark}/>
                    <Text style={[mainStyle.TextRegular,{paddingLeft:10}]}>Add</Text>
                </Button>
            </View>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default Birthdays;
