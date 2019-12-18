import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title, Text, Footer, FooterTab } from 'native-base';

import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import ProductListItem from '../../components/ProductListItem';
import AnimatedHeaderScroll from '../../components/AnimatedHeaderScroll';

import ProductSlider from '../../components/ProductsSlider';

import {productDetail} from '../../Data';

const productImage = "";
// create a component
class Product extends Component {

    componentDidMount(){
        let productId = this.props.navigation.getParam("productId");
        //console.log(productDetail);
    }

      _renderHeader = (<View style={{flexDirection:'row',alignItems:'stretch', backgroundColor:"transparent"}}>
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
    
      _renderFooter =(<Footer style={{height:80}}>
                        <FooterTab style={{backgroundColor:'#FFF',borderTopColor:"#CCC",borderTopWidth:0.3,elevation:4}}>
                            <Button transparent>
      <Text style={[mainStyles.ProductPriceText,{fontSize:16, color:Color.primaryDark}]}>UGX {productDetail.price}</Text>
                            <Text style={[mainStyles.IconText,{fontSize:8,textAlignVertical:'center',letterSpacing:2}]}>Happy gifting <Icon color={Color.primaryDark} size={10} style={styles.footerIcon} name="gift" /></Text>
                            </Button>
                            <Button 
                            onPress={() => {
                                this.props.addItemToCart({
                                    id:productDetail.id,
                                    name:productDetail.name,
                                    imageUrl:productDetail.imageUrl,
                                    price:productDetail.price,
                                    vendor:{id:productDetail.vendor.id, name:productDetail.vendor.name}
                            }); 
                            this.props.navigation.navigate("GiftBox");} } 
                            style={{borderRadius: 4, backgroundColor:Color.primaryDark, justifyContent:'center', alignItems: 'center', marginRight: 20}}
                            >
                                <Text style={[mainStyles.Heading3,{color:"#FFF", textAlign:'center', fontSize: 15}]}>Add to Giftbox</Text>
                            </Button>
                        </FooterTab>
                    </Footer>);

_renderScrollViewContent = (<View style={styles.scrollViewContent}>
                                    <View style={{paddingLeft:20,paddingRight:20, flexDirection: 'row'}}>
                                        <View style={{flexDirection:'column'}}>
                                            <Text style={[mainStyles.Heading2,{paddingBottom:4}]}>{productDetail.name}</Text>
<Text style={[mainStyles.ProductPriceText,{fontSize:16, paddingBottom:4}]}>UGX {productDetail.price}</Text>
                                        </View>
                                        {/* <View style={{flexDirection:'column', right:20,top:0, position:'absolute', alignItems:'center'}}>
                                            <TouchableOpacity><Icon3 name='heart' size={38} color={Color.primaryDark}/></TouchableOpacity>
                                            <Text style={mainStyles.TextMinor}>200</Text>
                                        </View> */}
                                    </View>
                                    <View style={{marginLeft: 10, marginRight: 10}}>

                                        <View
                                        style={{
                                            borderBottomColor: '#ddd',
                                            borderBottomWidth: 0.5,
                                            marginBottom:20,
                                            marginTop:20,
                                        }}
                                        />
                                        <TouchableOpacity>
                                            <Text style={mainStyles.TextMinor}>Supplied by {productDetail.vendor.name}</Text>
                                        </TouchableOpacity>
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
                                        {productDetail.description}
                                        </Text>
                                        <View
                                        style={{
                                            borderBottomColor: '#ddd',
                                            borderBottomWidth: 0.5,
                                            marginBottom:20,
                                            marginTop:20,
                                        }}
                                        />

                                        <Text style={[mainStyles.Heading3,{marginBottom:10}]}>You may also like</Text>
                                    </View>

                                    <ProductSlider {...this.props} products={productDetail.relatedProducts} />
                                    <View style={{padding:10}}/>
      </View>);

    render() {
        return (
            
            <View style={{flex:1, flexDirection: "column"}}>
                <AnimatedHeaderScroll 
                    RenderHeader = {this._renderHeader}
                    RenderFooter = {this._renderFooter}
                    ScrollViewContent = {this._renderScrollViewContent}
                    TopImage = {productDetail.imageUrl}
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

const mapDispatchToProps = (dispatch) =>{
    return{
        addItemToCart:(product) => dispatch({
            type:'ADD_TO_CART',
            payload: product
        })
    }
}

//make this component available to the app
export default connect(null,mapDispatchToProps)(Product);
