import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title, Text, Footer, FooterTab } from 'native-base';

import {priceFormat} from '../../helpers';
import ProductAPI from '../../services/ProductAPI';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import {BlogItem} from '../../components/ServerLoader';
import AnimatedHeaderScroll from '../../components/AnimatedHeaderScroll';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import ProductSlider from '../../components/ProductsSlider';

// create a component
class Product extends Component {
    state = {
        productDetail: null,
        radio_props: []
    }
    
    
    componentDidMount(){
        let productId = this.props.navigation.getParam("productId");

        ProductAPI.GetDetail(productId)
        .then(data => {
            const productDetail = data.body;

            this.setState({
                radio_props: [{label: productDetail.name + ` - ${priceFormat(productDetail.price)}`, value: productDetail.price}],
            });

            var optionsList = productDetail.productOptions;
            
            if(optionsList.length > 0){
                var newOptionsList = [];

                optionsList.forEach(option => {
                    newOptionsList.push({label: option.name + ` - ${priceFormat(option.price)}`, value: option.price})
                });
                
                this.setState({radio_props:newOptionsList})
            }

            this.setState({productDetail})
        })
        .catch(error => alert(error))
    }

      _renderHeader = () => (<View style={{flexDirection:'row',alignItems:'stretch', backgroundColor:"transparent"}}>
                            <Left style={{paddingLeft:10}}>
                                <Button onPress={() => this.props.navigation.goBack()} style={styles.headerIcon}>
                                    <Icon1 name='arrowleft' size={22}/>
                                </Button>
                            </Left>
                        </View>);
    
      _renderFooter  = (productDetail) =>(<Footer style={{height:80}}>
                        <FooterTab style={{backgroundColor:'#FFF',borderTopColor:"#CCC",borderTopWidth:0.3,elevation:4}}>
                            <Button transparent>
      <Text style={[mainStyles.ProductPriceText,{fontSize:16, color:Color.primaryDark}]}>{priceFormat(productDetail.price)}</Text>
                            <Text style={[mainStyles.IconText,{fontSize:8,textAlignVertical:'center',letterSpacing:2}]}>Happy gifting <Icon1 color={Color.PrimaryDark} size={10} style={styles.footerIcon} name="gift" /></Text>
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
                            style={{borderRadius: 4, backgroundColor:Color.PrimaryDark, justifyContent:'center', alignItems: 'center', marginRight: 20}}
                            >
                                <Text style={[mainStyles.Heading3,{color:"#FFF", textAlign:'center', fontSize: 15}]}>Add to Giftbox</Text>
                            </Button>
                        </FooterTab>
                    </Footer>);

_renderScrollViewContent  = (productDetail) => (<View style={styles.scrollViewContent}>
                                    <View style={{paddingLeft:20,paddingRight:20, flexDirection: 'row'}}>
                                        <View style={{flexDirection:'column'}}>
                                            <Text style={[mainStyles.Heading2,{paddingBottom:4}]}>{productDetail.name}</Text>
                                            <Text style={[mainStyles.ProductPriceText,{fontSize:16, paddingBottom:4}]}>{priceFormat(productDetail.price)}</Text>
                                        </View>
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
                                        <Text style={[mainStyles.Heading3,{marginBottom:4}]}>Product Description</Text>
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
                                        <Text style={[mainStyles.Heading3,{marginBottom:20}]}>Product Options</Text>

                                        <RadioForm
                                        labelStyle={[mainStyles.TextRegular,{fontSize:15}]}
                                        radio_props={this.state.radio_props}
                                        initial={0}
                                        onPress={(value) => {this.setState({
                                            productDetail: {
                                                ...productDetail,
                                                price:value,
                                            }
                                        })}}
                                        />
                                        <View
                                        style={{
                                            borderBottomColor: '#ddd',
                                            borderBottomWidth: 0.5,
                                            marginBottom:20,
                                            marginTop:20,
                                        }}
                                        />
                                        <Text style={[mainStyles.Heading3,{marginBottom:4}]}>Delivery Detail</Text>
                                        <Text style={mainStyles.TextRegular}>
                                        {productDetail.delivery}
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
        const {productDetail} = this.state;
        
        if(productDetail == null){
            return (
                <View style={{flex:1, padding:20}}>
                    <BlogItem width={width} height={600} speed={2}/>
                </View>
            );
        }else{
            return (
            
                <View style={{flex:1, flexDirection: "column"}}>
                    <AnimatedHeaderScroll 
                        RenderHeader = {this._renderHeader()}
                        RenderFooter = {this._renderFooter(productDetail)}
                        ScrollViewContent = {this._renderScrollViewContent(productDetail)}
                        TopImage = {productDetail.imageUrl}
                    />
                </View>
    
            );
        }
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
