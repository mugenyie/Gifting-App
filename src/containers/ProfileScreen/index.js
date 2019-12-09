//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';

import HomeFooter from '../../components/HomeFooter';
import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

import { SignOutUser } from '../../services/UserAuthManager';

// create a component
class ProfileScreen extends Component {

    async SignOut(){
        await SignOutUser();
        this.props.navigation.navigate('Login');
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:"#fff",paddingLeft:20,paddingBottom:4,paddingTop:2,height:50}}>
                    <Body>
                    <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>Profile</Title>
                    </Body>
                </Header>
                <Content>
                    <Button title={"SignOut"} onPress={() => this.SignOut()}/>
                </Content>
                <HomeFooter RouteName={"Profile"} {...this.props}/> 
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ProfileScreen;
