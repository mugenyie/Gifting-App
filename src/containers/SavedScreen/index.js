//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content} from 'native-base';

import ProductListItem from '../../components/ProductListItem';
import WhishlistAPI from '../../services/WishListAPI';
import Color from '../../common/Color';
import MainStyles from '../../common/mainStyles';

function Item({Item, onSelect}){
    return(
        <ProductListItem 
        productNavigation={onSelect}
        product={{id:Item.id,name:Item.name,imageSource:{uri:Item.imageUrl},price:Item.price}} 
        />
    );
  }


// create a component
class SavedScreen extends Component {

    state ={
        savedProducts: []
    }

    async componentDidMount(){
        let customerId = 1;
        await WhishlistAPI.GetByCustomer(customerId)
        .then(data =>{
            this.setState({savedProducts:data.body})
            console.log(data.body);
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
            <Header style={{backgroundColor:'#fff'}} androidStatusBarColor={Color.PrimaryDark}>
                <Body>
                    <Title style={[MainStyles.Heading1,{color:'#000',fontSize:18}]}>Saved Gifts</Title>
                </Body>
            </Header>
            <Content>
            <Content>
                <FlatList 
                numColumns={2}
                contentContainerStyle={{padding:10}}
                data={this.state.savedProducts.sort((a, b) => a.displayOrder - b.displayOrder)}
                renderItem={({ item }) => (
                    <Item
                    onSelect={this.props.navigation.navigate}
                    Item={item}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                />
            </Content>
            </Content>
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
export default SavedScreen;
