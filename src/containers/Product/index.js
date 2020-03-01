import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, FlatList, Dimensions, SafeAreaView, Platform} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {connect} from 'react-redux';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Container, Header, Left, Body, Right, Button, Title, Text, Footer, FooterTab, Icon } from 'native-base';

import {GetUserData} from '../../services/UserAuthManager';
import {priceFormat} from '../../helpers';
import ProductAPI from '../../services/ProductAPI';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';
import {BlogItem} from '../../components/ServerLoader';
import AnimatedHeaderScroll from '../../components/AnimatedHeaderScroll';
import SimpleHeader from '../../components/SimpleHeader';
import WhishlistAPI from '../../services/WishListAPI';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import ProductSlider from '../../components/ProductsSlider';
import WishListAPI from '../../services/WishListAPI';

async function saveProduct(payload){
    console.log(payload)
    await WishListAPI.Add(payload)
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

async function unSaveProduct(payload){
    await WishListAPI.Remove(payload)
    then(data => console.log(data))
    .catch(err => console.log(err))
}

// create a component
class Product extends Component {
    constructor(){
        super();
        this.state = {
            valueIndex:0,
            productLiked:false,
            productDetail: null,
            radio_props: [],
            customerId: 0
        }
    }
    
    async componentDidMount(){
        let productId = this.props.navigation.getParam("productId");
        
        await GetUserData()
        .then(userInfo => {
            if(userInfo){
                console.log(userInfo)
                this.setState({customerId: userInfo.customerId});
                this.fetchProduct(productId, this.state.customerId);
            }else{
                // Lock out the user
            }
        })
        .catch(error => {
            alert(error);
        })
    }

    fetchProduct = async (productId, customerId) => {
        await ProductAPI.GetDetail(productId, customerId)
        .then(data => {
            const productDetail = data.body;

            this.setState({
                radio_props: [{label: productDetail.name + ` - ${priceFormat(productDetail.price)}`, value: productDetail.price}],
                productLiked: productDetail.isSaved
            });

            var optionsList = productDetail.productOptions;
            
            if(optionsList.length > 0){
                var newOptionsList = [];

                optionsList.forEach(option => {
                    newOptionsList.push({label: option.name + ` - ${priceFormat(option.price)}`, value: option.price})
                });
                
                this.setState({radio_props:newOptionsList})
            }

            this.setState({productDetail, valueIndex: this.state.radio_props[0].value})
        })
        .catch(error => alert(error))
    }

    toggleSavedProduct = (customerId, productId) => {
        if(this.state.productLiked){
            unSaveProduct({customerId,productId})
            this.setState({productLiked:false}) 
        }else{
            saveProduct({customerId,productId})
            this.setState({productLiked:true})
        }
    }

      _renderHeader = () => (
      <View style={{flexDirection:'row',alignItems:'stretch',paddingBottom:10}}>
            <Left>
                <Button onPress={() => this.props.navigation.goBack()} transparent>
                    <Icon name='arrow-back'/>
                </Button>
            </Left>
        </View>);
    
      _renderFooter  = (productDetail) =>(<Footer style={{height:80}}>
                        <FooterTab style={{backgroundColor:'#FFF',borderTopColor:"#CCC",borderTopWidth:0.3,elevation:4}}>
                            <Button transparent>
      <Text style={[mainStyles.ProductPriceText,{fontSize:16, color:Color.PrimaryDark}]}>{priceFormat(productDetail.price)}</Text>
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
                                        <View style={{flexDirection:'column',flex:0.8,marginRight:20}}>
                                            <Text style={[mainStyles.Heading2,{paddingBottom:4}]}>{productDetail.name}</Text>
                                            <Text style={[mainStyles.ProductPriceText,{fontSize:16, paddingBottom:4}]}>{priceFormat(productDetail.price)}</Text>
                                        </View>
                                        <TouchableOpacity style={{flex:0.2, alignItems:'center'}} onPress={() => this.toggleSavedProduct(this.state.customerId,productDetail.id)}>
                                            <Icon 
                                            name={this.state.productLiked ? "ios-heart" : "ios-heart-empty"}
                                            size={30} 
                                            color="#000" 
                                            />
                                            <Text style={[mainStyles.TextRegular],{fontSize:13}}>{this.state.productLiked?"SAVED":"SAVE"}</Text>
                                        </TouchableOpacity>
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
<RadioForm>
  {
    this.state.radio_props.map((obj, i) => (
      <RadioButton labelHorizontal={true} key={i} >
        <RadioButtonInput
          obj={obj}
          index={i}
          isSelected={this.state.valueIndex === this.state.radio_props[i].value}
          onPress={(value) => {this.setState({
            productDetail: {
                ...productDetail,
                price:value,
            },
            valueIndex:value
        })}}
          borderWidth={2}
          buttonInnerColor={Color.PrimaryDark}
          buttonOuterColor={Color.PrimaryDark}
          buttonSize={10}
          buttonOuterSize={20}
          buttonStyle={{}}
          buttonWrapStyle={{marginBottom:10}}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
          onPress={(value) => {this.setState({
            productDetail: {
                ...productDetail,
                price:value,
            },
            valueIndex:value
        })}}
          labelStyle={[mainStyles.TextRegular,{fontSize:15}]}
          labelWrapStyle={{marginBottom:10}}
        />
      </RadioButton>
    ))
  }  
</RadioForm>

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
                <Container>
                    <SimpleHeader {...this.props} />
                    <View style={{flex:1, justifyContent:'center',paddingLeft:width*0.08,marginTop:height*0.1}}>
                        <BlogItem width={width} height={600} speed={2}/>
                    </View>
                </Container>
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
        justifyContent:'center',
        backgroundColor:"rgba(255,255,255, 0.4)",
        width: 40, 
        height: 40, 
        borderRadius: 40 / 2
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
