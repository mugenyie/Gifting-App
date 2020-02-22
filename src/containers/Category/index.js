import React, { Component } from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon, Content } from 'native-base';

import CategoryAPI from '../../services/CategoryAPI';
import VendorAPI from '../../services/VendorAPI';
import Color from '../../common/Color';
import SimpleHeader from '../../components/SimpleHeader';
import ProductListItem from '../../components/ProductListItem';

let topImage;
let topText;

function Item({Item, onSelect}){
    return(
        <ProductListItem 
        productNavigation={onSelect}
        product={{id:Item.id,name:Item.name,imageSource:{uri:Item.imageUrl},price:Item.price}} 
        />
    );
  }


// create a component
class Category extends Component {
    state = {
        categoryDetail: null,
        categoryName:'',
        categoryProducts: []
    }
    
    
    componentDidMount(){
        let categoryId = this.props.navigation.getParam("categoryId");
        let vendorId = this.props.navigation.getParam("vendorId");
        this.setState({categoryName:this.props.navigation.getParam("categoryName")})

        if(categoryId){
            CategoryAPI.GetDetail(categoryId)
            .then(data => {

                const categoryDetail = data.body;

                const categoryProducts = categoryDetail.products;
                console.log(categoryProducts);
                topImage = categoryDetail.imageUrl;
                topText = categoryDetail.name;

                this.setState({categoryDetail, categoryProducts});
            })
            .catch(error => alert(error))
        }else{
            VendorAPI.GetDetail(vendorId)
            .then(data => {

                const categoryDetail = data.body;

                const categoryProducts = categoryDetail.products;
                console.log(categoryProducts);
                topImage = categoryDetail.imageUrl;
                topText = categoryDetail.name;

                this.setState({categoryDetail, categoryProducts});
            })
            .catch(error => alert(error))
        }
    }


    render() {
        return (
            <Container>
                <SimpleHeader {...this.props} headerTitle={this.state.categoryName}/>
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
