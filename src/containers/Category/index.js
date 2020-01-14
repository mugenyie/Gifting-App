import React, { Component } from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';

import CategoryAPI from '../../services/CategoryAPI';
import VendorAPI from '../../services/VendorAPI';
import Color from '../../common/Color';
import AnimatedHeaderScroll from '../../components/AnimatedHeaderScroll';
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
        categoryProducts: []
    }
    
    
    componentDidMount(){
        let categoryId = this.props.navigation.getParam("categoryId");
        let vendorId = this.props.navigation.getParam("vendorId");

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


    _renderHeader = () => (<View style={{flexDirection:'row',alignItems:'stretch', backgroundColor:"transparent"}}>
        <Left style={{paddingLeft:10}}>
            <Button onPress={() => this.props.navigation.goBack()} style={styles.headerIcon}>
                <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
            </Button>
        </Left>

        <Right style={{paddingRight:10}}>
            <Button onPress={() => alert("you clicked me")} style={styles.headerIcon}>
                <Icon2 name='ellipsis-v' size={16} color={Color.primaryDark}/>
            </Button>
        </Right>
    </View>);

    render() {
        return (
            
            <View style={{flex:1, flexDirection: "column"}}>
                <AnimatedHeaderScroll 
                    RenderHeader = {this._renderHeader()}
                    TopImage = {topImage}
                    TopText= {topText}
                    ScrollViewContent = {
                    <FlatList 
                    numColumns={2}
                    contentContainerStyle={{padding:5}}
                    data={this.state.categoryProducts.sort((a, b) => a.displayOrder - b.displayOrder)}
                    renderItem={({ item }) => (
                        <Item
                        onSelect={this.props.navigation.navigate}
                        Item={item}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    />
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    headerIcon: {
        elevation:0, 
        justifyContent:'center',
        backgroundColor:Color.WhiteOpacity,
        width: 32, 
        height: 32, 
        borderRadius: 32 / 2
    }
});

//make this component available to the app
export default Category;
