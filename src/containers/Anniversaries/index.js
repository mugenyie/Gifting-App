import React, { Component } from 'react';
import {StyleSheet, View, Text, SafeAreaView, SectionList, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import ButtonOutline from '../../components/ButtonOutline';
import AnniversaryAPI from '../../services/AnniversaryAPI';
import ActivityLoader from '../../components/ActivityLoader';
import {GetUserData} from '../../services/UserAuthManager';

import {NavigationEvents} from 'react-navigation';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';


function Item({id, title, day, month, navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("EditAnniversary", {anniversary: {id, title, day, month}})} style={[styles.item,{flexDirection:'row',flex:1}]}>
            <Text style={[mainStyle.Heading1Light,styles.title,{width:'90%'}]}>{title}</Text>
            <Text style={[mainStyle.TextRegular,styles.day,{width:'10%'}]}>{day}</Text>
        </TouchableOpacity>
    );
}
// create a component
class Anniversaries extends Component {

    constructor(){
        super();
        this.state = {
            AnniversaryData : [],
            ActivityInProgress: false
        }
    }

    fetchAnniversaries = async () => {
        this.setState({ActivityInProgress:true});

        let customerId;
        
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                customerId = userInfo.customerId
            }else{
                // Lock out the user
            }
        })
        .catch(error => {
            alert(error);
        });

        await AnniversaryAPI.GetByCustomer(customerId)
        .then(data => {
            const AnniversaryData = data.body;
            console.log(AnniversaryData);
            this.setState({AnniversaryData});
            this.setState({ActivityInProgress:false});
        })
        .catch(err => {
            console.log(err);
            this.setState({ActivityInProgress:false});
        })
    }
 
    _renderNoAnniversary = () => {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={mainStyle.Heading3}>No upcoming anniversaries</Text>
                <Text style={[mainStyle.TextRegular,{textAlign:'center',marginTop:10}]}>Add new to get notified when the day comes</Text>
                <ButtonOutline marginTop={40} title="Add" iconName="pluscircle" onPress={() => this.props.navigation.navigate("NewAnniversary")} />
            </View>
        );
    }

    _renderAnniversaries = (AnniversaryData) => {
        return (
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{
            flex:1, 
            marginLeft:10,
            marginRight:10,
            paddingTop:20
            }}>
                <SectionList
                showsVerticalScrollIndicator={false}
                sections={AnniversaryData}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item 
                id={item.id} month={item.month}
                title={item.title} day={item.day} navigation={this.props.navigation} />}
                renderSectionHeader={({ section: { month } }) => (
                    <Text style={[mainStyle.Heading1,styles.header]}>{month}</Text>
                )}
                keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
          );
    }

    render() {
        const {AnniversaryData, ActivityInProgress} = this.state;
        return (
            <Container
            style={styles.container}
            >
            <NavigationEvents
            onDidFocus={() => this.fetchAnniversaries()}
            />
            <ActivityLoader display={ActivityInProgress} />
            {
                AnniversaryData.length == 0 ? this._renderNoAnniversary() : this._renderAnniversaries(AnniversaryData)
            }
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    item: {
        backgroundColor: "#FFF",
        padding: 20,
        marginVertical: 8,
        borderBottomWidth:0.5,
        borderBottomColor:Color.LightRose
    },
    header: {
        fontSize: 20,
    },
    title: {
        fontSize: 18,
    },
    day: {
        fontSize:19,
        color:Color.LightRose
    }
});

//make this component available to the app
export default Anniversaries;
