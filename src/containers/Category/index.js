import React, { Component } from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon, Content } from 'native-base';

import ProductsAPI from '../../services/ProductAPI';
import Color from '../../common/Color';
import SimpleHeader from '../../components/SimpleHeader';
import ProductListItem from '../../components/ProductListItem';

let topImage;
let topText;

function Item({Item, onSelect}){
    return(
        <ProductListItem 
        productNavigation={onSelect}
        product={{id:Item.id,name:Item.name,imageSource:{uri:Item.displayImage},price:Item.price}} 
        />
    );
  }


// create a component
class Category extends Component {
    state = {
        topImage: '',
        topText: '',
        topDescription: '',
        categoryProducts: []
    }
    
    
    componentDidMount(){
        let categoryId = this.props.navigation.getParam("categoryId");
        let vendorId = this.props.navigation.getParam("vendorId");

        this.setState({
            topImage: this.props.navigation.getParam("displayImage"),
            topText: this.props.navigation.getParam("name"),
            topDescription: this.props.navigation.getParam("description")
        })

        if(categoryId){
            ProductsAPI.GetByCategory(categoryId)
            .then(data => {
                let categoryProducts = data.body;

                this.setState({categoryProducts});
            })
            .catch(error => alert(error))
        }else{
            ProductsAPI.GetByVendor(vendorId)
            .then(data => {
                const categoryProducts = data.body;

                this.setState({categoryProducts});
            })
            .catch(error => alert(error))
        }
    }


    render() {
        return (
            <Container>
                <SimpleHeader {...this.props} headerTitle={this.state.name}/>
                <Content>
                    <FlatList 
                    numColumns={2}
                    contentContainerStyle={{padding:10}}
                    data={this.state.categoryProducts.sort((a, b) => a.displayOrder - b.displayOrder)}
                    renderItem={({ item }) => (
                        <Item
                        onSelect={this.props.navigation.navigate}
                        Item={item}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    />
                </Content>
            </Container>
        );
    }
}


//make this component available to the app
export default Category;
