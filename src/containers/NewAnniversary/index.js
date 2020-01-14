import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Content, Form, Item, Input, DatePicker} from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
class NewAnniversary extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }

    render() {

        return (
            <Container>
            <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                <Button onPress={() => this.props.navigation.goBack()} transparent>
                    <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                </Button>
                </Left>
                <Body>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>New Birthday</Title>
                </Body>
                <Right>
                <Button transparent>
                    
                </Button>
                </Right>
            </Header>
            <Content style={{padding:20}}>
                <Form>
                <Item>
                    <Icon style={{paddingRight:10}} name='user' size={22} color={Color.primaryDark}/>
                    <Input placeholder='Name'/>
                </Item>

                <Item style={{marginTop:20}}>
                    <Icon style={{paddingRight:10}} name='phone' size={22} color={Color.primaryDark}/>
                    <Input placeholder='Tel.'/>
                    <Icon name='contacts' size={22} color={Color.primaryDark}/>
                </Item>

                <Item style={{marginTop:20}}>
                    <DatePicker
                    defaultDate={Date.now()}
                    minimumDate={new Date(1900, 1, 1)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select birthday"
                    textStyle={{ color: Color.primaryDark }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    />
                    <Text>
                    Date: {this.state.chosenDate.toString().substr(4, 12)}
                    </Text>
                </Item>

                <Button onPress={() => alert("Added")} style={{backgroundColor:Color.YellowBackground,justifyContent:'center',marginTop:20,borderRadius:2,borderColor:"#ccc",borderWidth:0.3}}>
                    <Text style={mainStyle.Heading3}>Add</Text>
                </Button>
                </Form>
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
