import React, { Component } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';

import GiftStoresSlider from '../../components/GiftStoresSlider';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import SectionTitle from '../../components/SectionTitle';

// create a component
class GiftStores extends Component {
    render() {
        const uri = "https://media.timeout.com/images/105147024/630/472/image.jpg";
        const stores = [
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Follow"
            },
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Following"
            },
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Follow"
            },
            {
                image: {
                    uri:uri
                },
                name: "Kampala Florists",
                status: "Follow"
            },
          ];
        const {navigate} = this.props.navigation;

        return (
            <ScrollView style={{flex:1}}>
                <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                    <Left>
                        <Button onPress={() => navigate("Home")} transparent>
                            <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={[{color:Color.primaryDark},mainStyles.Heading2]}>Gift Stores</Title>
                    </Body>
                    <Right>
                        
                    </Right>
                </Header>
                <View style={{padding:10}}/>
                <SectionTitle title={"Recommendations for you"}/>
                <GiftStoresSlider stores = {stores}/>
                <Text style={[mainStyles.Heading2,{paddingTop: 10, paddingBottom: 4, paddingLeft:10}]}>Stores you follow</Text>
                <View>
                    <Text style={[mainStyles.TextRegular, {textAlign:'center', padding:50}]}>Follow stores to see them here</Text>
                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default GiftStores;
