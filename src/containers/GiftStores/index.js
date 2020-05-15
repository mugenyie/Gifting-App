import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, FlatList, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Text, Content, Icon, Card } from 'native-base';
import mainStyles from '../../common/mainStyles';
const width = Dimensions.get('window').width;

const imageWidth = (width * 0.45);
import VendorAPI from '../../services/VendorAPI';

// create a component
class GiftStores extends Component {
    constructor(){
        super();
        this.state={
            vendors: []
        }
    }

    async componentDidMount(){
        await VendorAPI.GetAll()
        .then(data => {
            this.setState({vendors:data.body})
        })
        .catch(err => alert(err))
    }

    _renderItem = (item) => 
    {
        return(
            <Card key={item.id} style={styles.imageContainer}>
                <ImageBackground 
                style={[{flex:1,justifyContent:'center',alignItems:'center'}]}
                imageStyle={styles.storeBackgroundImage}
                resizeMode="cover" resizeMethod="scale" source={{uri:item.displayImage}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Category", {vendorId:item.id, vendorName:item.name})} activeOpacity={0.8} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{justifyContent:'center',backgroundColor:"#fff",width:100,padding:10,alignContent:'center',opacity:0.8,alignSelf:"center"}}>
                            <Text style={[mainStyles.Heading3,{textAlign:'center',color:"#000"}]}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </Card>
        );
    }

    render() {
        const {vendors} = this.state;
        return (
            <Container>
                <Content>
                    <FlatList 
                        numColumns={2}
                        contentContainerStyle={{padding:10}}
                        data={this.state.vendors.sort((a, b) => a.displayOrder - b.displayOrder)}
                        renderItem = {({item}) => this._renderItem(item)}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    imageContainer: {
        width:imageWidth,
        height:200,
        borderRadius:10, 
        marginRight:10, 
        flexDirection: 'column', 
        elevation: 2,
      }
});

//make this component available to the app
export default GiftStores;
