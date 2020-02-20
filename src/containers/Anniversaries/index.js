import React, { Component } from 'react';
import {StyleSheet, View, Text, SafeAreaView, SectionList, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title} from 'native-base';
import ButtonOutline from '../../components/ButtonOutline';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

const DATA = [
    {
      Month: 'JANUARY',
      data: [{id: 1,title:"Mary's birthday",day:25},{id: 2,title:"Mary's birthday",day:25}]
    },
    {
        Month: 'FEBRUARY',
        data: [{id: 1,title:"Mary's birthday",day:25},{id: 2,title:"Mary's birthday",day:25}]
    },
    {
        Month: 'MARH',
        data: [{id: 1,title:"Mary's birthday",day:25},{id: 2,title:"Mary's birthday",day:25}]
    },
    {
        Month: 'APRIL',
        data: [{id: 1,title:"Mary's birthday",day:25},{id: 2,title:"Mary's birthday",day:25}]
    },
  ];

function Item({ title, day }) {
return (
    <TouchableOpacity style={[styles.item,{flexDirection:'row',flex:1}]}>
        <Text style={[mainStyle.Heading1Light,styles.title,{flex:0.8}]}>{title}</Text>
        <Text style={[mainStyle.TextRegular,styles.day,{flex:0.2}]}>{day}</Text>
    </TouchableOpacity>
);
}
// create a component
class Anniversaries extends Component {
    _renderNoAnniversary = () => {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={mainStyle.Heading3}>No upcoming anniversaries</Text>
                <Text style={[mainStyle.TextRegular,{textAlign:'center',marginTop:10}]}>Add new to get notified when the day comes</Text>
                <ButtonOutline marginTop={40} title="Add" iconName="pluscircle" onPress={() => this.props.navigation.navigate("NewAnniversary")} />
            </View>
        );
    }

    _renderAnniversaries = () => {
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
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item.title} day={item.day} />}
                renderSectionHeader={({ section: { Month } }) => (
                    <Text style={[styles.header,mainStyle.Heading1]}>{Month}</Text>
                )}
                />
            </ScrollView>
          );
    }

    render() {

        return (
            <Container
            style={styles.container}
            >
            {
                //this._renderAnniversaries()
                this._renderNoAnniversary()
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
        fontSize: 28,
    },
    title: {
        fontSize: 18,
    },
    day: {
        fontSize:32,
        color:Color.LightRose
    }
});

//make this component available to the app
export default Anniversaries;
