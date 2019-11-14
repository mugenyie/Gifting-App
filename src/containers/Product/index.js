import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import { Container, Header, Left, Body, Right, Button, Title, Text, Footer, FooterTab } from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';
import mainStyles from '../../common/mainStyles';
import ProductListItem from '../../components/ProductListItem';
import AnimatedHeaderScroll from '../../components/AnimatedHeaderScroll';


const productImage = require('../../../assets/teddy.jpg');

// create a component
class Product extends Component {

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
    
      _renderFooter =(<Footer style={{height:80}}>
                        <FooterTab style={{backgroundColor:'#FFF'}}>
                            <Button transparent>
                            <Text style={[mainStyles.ProductPriceText,{fontSize:16, color:Color.primaryDark}]}>UGX 19,500</Text>
                            <Text style={[mainStyles.IconText,{fontSize:8,textAlignVertical:'center',letterSpacing:2}]}>Happy gifting 😜</Text>
                            </Button>
                            <Button onPress={() => alert("Thank you!")} style={{borderRadius: 4, backgroundColor:Color.primaryDark, justifyContent:'center', alignItems: 'center', marginRight: 20}}>
                                <Text style={[mainStyles.Heading3,{color:"#FFF", textAlign:'center', fontSize: 15}]}>Add to Giftbox</Text>
                            </Button>
                        </FooterTab>
                    </Footer>);

_renderScrollViewContent = (<View style={styles.scrollViewContent}>
                                    <View style={{paddingLeft:20,paddingRight:20, flexDirection: 'row'}}>
                                        <View style={{flexDirection:'column'}}>
                                            <Text style={[mainStyles.Heading2,{paddingBottom:4}]}>Woolen Teddy Bear</Text>
                                            <Text style={[mainStyles.ProductPriceText,{fontSize:16, paddingBottom:4}]}>UGX 14,500</Text>
                                        </View>
                                        <View style={{flexDirection:'column', right:20,top:0, position:'absolute', alignItems:'center'}}>
                                            <TouchableOpacity><Icon3 name='heart' size={38} color={Color.primaryDark}/></TouchableOpacity>
                                            <Text style={mainStyles.TextMinor}>200</Text>
                                        </View>
                                    </View>
                                    <View style={{marginLeft: 20, marginRight: 20}}>

                                        <View
                                        style={{
                                            borderBottomColor: '#ddd',
                                            borderBottomWidth: 0.5,
                                            marginBottom:20,
                                            marginTop:20,
                                        }}
                                        />
                                        <TouchableOpacity><Text style={mainStyles.TextMinor}>Supplied by City Gift Shop</Text></TouchableOpacity>
                                        <View
                                        style={{
                                            borderBottomColor: '#ddd',
                                            borderBottomWidth: 0.5,
                                            marginBottom:20,
                                            marginTop:20,
                                        }}
                                        />
                                        <Text style={[mainStyles.Heading3,{marginBottom:4}]}>Product detail</Text>
                                        <Text style={mainStyles.TextRegular}>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </Text>
                                        <View
                                        style={{
                                            borderBottomColor: '#ddd',
                                            borderBottomWidth: 0.5,
                                            marginBottom:20,
                                            marginTop:20,
                                        }}
                                        />
                                        <Text style={[mainStyles.Heading3,{marginBottom:4}]}>Delivery options</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <Text style={mainStyles.Heading4}>
                                                Delivery Fee: 
                                            </Text>
                                            <Text> </Text>
                                            <Text style={[mainStyles.TextRegular,{textAlignVertical:'bottom'}]}>
                                                UGX 5,000
                                            </Text>
                                        </View>
                                        <View
                                        style={{
                                            borderBottomColor: '#ddd',
                                            borderBottomWidth: 0.5,
                                            marginBottom:20,
                                            marginTop:20,
                                        }}
                                        />
                                        <Text style={[mainStyles.Heading3,{marginBottom:10}]}>You may also like</Text>
                                        <ScrollView 
                                        style={{marginLeft:-20,marginRight:-20}}
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        >
                                        <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
                                        <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
                                        <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
                                        <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
                                        <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
                                        <ProductListItem product={{name:"Woolen Teddy Baer",imageSource:productImage,price:"Ushs. 16,500"}} />
                                        </ScrollView>
                                    </View>
                                    <View style={{padding:10}}/>
      </View>);

    render() {
        return (
            
            <View style={{flex:1, flexDirection: "column"}}>
                <AnimatedHeaderScroll 
                    RenderHeader = {this._renderHeader}
                    RenderFooter = {this._renderFooter}
                    ScrollViewContent = {this._renderScrollViewContent}
                    TopImage = {productImage}
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
        backgroundColor:"rgba(255,255,255, 0.4)",
        width: 32, 
        height: 32, 
        borderRadius: 32 / 2
    }
});

//make this component available to the app
export default Product;
