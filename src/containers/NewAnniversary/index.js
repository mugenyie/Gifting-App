import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Content, Form, Item, Input} from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

// create a component
class NewAnniversary extends Component {

    state= {
        AnniversaryTitle: "",
        AnniversaryMonth: 0,
        AnniversaryDay: 0
    }

    RenderDays = day => {
        return(
            <Picker.Item label={day.toString()} value={day} />
        );
    }


    render() {

        return (
            <Container>
            <Content style={{padding:20}}>

            <Text style={[styles.inputlabel,mainStyle.Heading1,{marginBottom:5,fontSize:20}]}>Title</Text>
            <TextInput
            style={{borderRadius:8,fontSize:16,color:'#555',elevation:1}}
            value={this.state.AnniversaryTitle}
            onChangeText={AnniversaryTitle => {
                this.setState({ AnniversaryTitle })
            }}/>

            <View style={{flex:1,flexDirection:'row', marginTop:20, marginBottom:40}}>
                <View style={{flex:0.5,borderBottomWidth:1,borderBottomColor:'#ccc', marginRight:10}}>
                    <Picker
                    selectedValue={this.state.AnniversaryMonth}
                    style={{height: 50}}
                    onValueChange={(AnniversaryMonth, itemIndex) =>
                        this.setState({AnniversaryMonth})
                    }>
                        <Picker.Item label="Month" value={0} />
                        <Picker.Item label="JANUARY" value={1} />
                        <Picker.Item label="FEBRUARY" value={2} />
                        <Picker.Item label="MARCH" value={3} />
                        <Picker.Item label="APRIL" value={4} />
                        <Picker.Item label="MAY" value={5} />
                        <Picker.Item label="JUNE" value={6} />
                        <Picker.Item label="JULY" value={7} />
                        <Picker.Item label="AUGUST" value={8} />
                        <Picker.Item label="SEPTEMBER" value={9} />
                        <Picker.Item label="OCTOBER" value={10} />
                        <Picker.Item label="NOVEMBER" value={11} />
                        <Picker.Item label="DECEMBER" value={12} />
                    </Picker> 
                </View>  

                <View style={{flex:0.5,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                    <Picker
                    selectedValue={this.state.AnniversaryDay}
                    style={{height: 50}}
                    onValueChange={(AnniversaryDay, itemIndex) =>
                        this.setState({AnniversaryDay})
                    }>
                        <Picker.Item label="Day" value={0} />
                        {days.map(this.RenderDays)}
                    </Picker>
                </View>
            </View>

            <Button
            style={{backgroundColor:Color.PrimaryDark,elevation:2,alignContent:'center',justifyContent:'center'}}
            >
                <Text style={[mainStyle.Heading2,{fontSize:18,color:'#fff',textAlign:'center'}]}>SAVE DATE</Text>
            </Button>

            </Content>
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
export default NewAnniversary;
