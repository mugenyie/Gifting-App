import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Content, Form, Item, Input} from 'native-base';
import AnniversaryAPI from '../../services/AnniversaryAPI';
import ActivityLoader from '../../components/ActivityLoader';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';
import mainStyles from '../../common/mainStyles';

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

// create a component
class NewAnniversary extends Component {

    state= {
        ActivityInProgress:false,
        AnniversaryTitle: "",
        AnniversaryMonth: 0,
        AnniversaryDay: 0,
        customerId:""
    }

    async componentDidMount(){
        let customerId = 1;
        this.setState({customerId});
    }

    RenderDays = day => {
        return(
            <Picker.Item key={day.toString()} label={day.toString()} value={day} />
        );
    }

    addNewAnniversary = (title, customerId, month, day) => {
        try{

            this.setState({ActivityInProgress:true})

            if(title.trim() == ""){
                throw "Title cannot be null"
            }
            if(month == 0){
                throw "Please select anniversary month"
            }
            if(day == 0){
                throw "Please select anniversary day"
            }
            
            AnniversaryAPI.Create({
                title,
                customerId,
                month,
                day
            })
            .then(data => {
                this.props.navigation.navigate("Anniversaries");
            })
            .catch(err => {throw err})
        }catch(err){
            alert(err);
            this.setState({ActivityInProgress:false})
        }
    }

    render() {
        const {AnniversaryDay, AnniversaryMonth, AnniversaryTitle, customerId, ActivityInProgress} = this.state;
        return (
            <Container>
            <Content style={{padding:20}}>

            <Text style={[styles.inputlabel,mainStyle.Heading1,{marginBottom:5,fontSize:20}]}>Title</Text>
            <TextInput
            numberOfLines={2}
            multiline
            underlineColorAndroid="transparent"
            style={[mainStyles.Heading1Light,{borderRadius:8,fontSize:20,color:'#000',elevation:1}]}
            value={AnniversaryTitle}
            onChangeText={AnniversaryTitle => {
                this.setState({ AnniversaryTitle })
            }}/>

            <ActivityLoader display={ActivityInProgress} />

            <View style={{flex:1,flexDirection:'row', marginTop:20, marginBottom:40}}>
                <View style={{flex:0.5,borderBottomWidth:1,borderBottomColor:'#ccc', marginRight:10}}>
                    <Picker
                    selectedValue={AnniversaryMonth}
                    style={{height: 50}}
                    onValueChange={(AnniversaryMonth) =>
                        this.setState({AnniversaryMonth})
                    }>
                        <Picker.Item key={0} label="Month" value={0} />
                        <Picker.Item key={1} label="JANUARY" value={1} />
                        <Picker.Item key={2} label="FEBRUARY" value={2} />
                        <Picker.Item key={3} label="MARCH" value={3} />
                        <Picker.Item key={4} label="APRIL" value={4} />
                        <Picker.Item key={5} label="MAY" value={5} />
                        <Picker.Item key={6} label="JUNE" value={6} />
                        <Picker.Item key={7} label="JULY" value={7} />
                        <Picker.Item key={8} label="AUGUST" value={8} />
                        <Picker.Item key={9} label="SEPTEMBER" value={9} />
                        <Picker.Item key={10} label="OCTOBER" value={10} />
                        <Picker.Item key={11} label="NOVEMBER" value={11} />
                        <Picker.Item key={12} label="DECEMBER" value={12} />
                    </Picker> 
                </View>  

                <View style={{flex:0.5,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                    <Picker
                    selectedValue={AnniversaryDay}
                    style={{height: 50}}
                    onValueChange={(AnniversaryDay) =>
                        this.setState({AnniversaryDay})
                    }>
                        <Picker.Item key={0} label="Day" value={0} />
                        {days.map(this.RenderDays)}
                    </Picker>
                </View>
            </View>

            <Button
            onPress={() => this.addNewAnniversary(AnniversaryTitle, customerId, AnniversaryMonth, AnniversaryDay)}
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
