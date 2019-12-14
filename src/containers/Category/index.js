import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title, Text } from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';
import AnimatedHeaderScroll from '../../components/AnimatedHeaderScroll';
import ProductListItem from '../../components/ProductListItem';

const topImage = "";
const productImage = "";

// create a component
class Category extends Component {
    _renderHeader = (<View style={{flexDirection:'row',alignItems:'stretch', backgroundColor:"transparent"}}>
                            <Left style={{paddingLeft:10}}>
                                <Button onPress={() => this.props.navigation.navigate("Home")} style={styles.headerIcon}>
                                    <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                                </Button>
                            </Left>

                            <Right style={{paddingRight:10}}>
                                <Button onPress={() => alert("you clicked me")} style={styles.headerIcon}>
                                    <Icon2 name='ellipsis-v' size={16} color={Color.primaryDark}/>
                                </Button>
                            </Right>
                        </View>);

    _renderScrollViewContent = (
    <View style={{paddingLeft: 10,paddingRight: 10,}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:10}}>
            <ProductListItem navigateToProduct={() => this.props.navigation.navigate("Product")} product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
            <ProductListItem navigateToProduct={() => this.props.navigation.navigate("Product")} product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}}/>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <ProductListItem navigateToProduct={() => this.props.navigation.navigate("Product")} product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
            <ProductListItem navigateToProduct={() => this.props.navigation.navigate("Product")} product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}}/>
        </View>
    </View>);

    render() {
        return (
            
            <View style={{flex:1, flexDirection: "column"}}>
                <AnimatedHeaderScroll 
                    RenderHeader = {this._renderHeader}
                    TopImage = {topImage}
                    TopText="For Him"
                    ScrollViewContent = {this._renderScrollViewContent}
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
