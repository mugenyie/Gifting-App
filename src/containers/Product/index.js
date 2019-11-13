import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity, Dimensions,  Animated, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title, Text, Footer, FooterTab } from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';
import mainStyles from '../../common/mainStyles';
import ProductListItem from '../../components/ProductListItem';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Dimensions.get('window').width;

const HEADER_MAX_HEIGHT = screenHeight * 0.5;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const productImage = require('../../../assets/teddy.jpg');

// create a component
class Product extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          scrollY: new Animated.Value(
            // iOS has negative initial scroll value because content inset...
            Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
          )
        };
      }
    
      _renderScrollViewContent() {
        return (
          <View style={styles.scrollViewContent}>
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
          </View>
        );
      }





    render() {
        const {navigate} = this.props.navigation;
        

        // Because of content inset the scroll value will be negative on iOS so bring
        // it back to 0.
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });
    
        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });
    
        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0.8],
            extrapolate: 'clamp',
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: 'clamp',
        });

        return (
            
            <View style={{flex:1, flexDirection: "column"}}>
                <Animated.ScrollView
                style={styles.fill}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                    { useNativeDriver: true },
                )}
                >
                    {this._renderScrollViewContent()}
                </Animated.ScrollView>

                <Animated.View
                pointerEvents="none"
                style={[
                    styles.header,
                    { transform: [{ translateY: headerTranslate }] },
                ]}
                >
                    <Animated.Image
                        style={[
                        styles.backgroundImage,
                        {
                            opacity: imageOpacity,
                            transform: [{ translateY: imageTranslate }],
                        },
                        ]}
                        source={productImage}
                    />
                </Animated.View>
                <Animated.View
                style={[
                    styles.bar,
                    {
                    transform: [
                        { translateY: titleTranslate },
                    ],
                    },
                ]}
                >
                    <View style={{flexDirection:'row',alignItems:'stretch', backgroundColor:"transparent"}}>
                        <Left style={{paddingLeft:10}}>
                            <Button onPress={() => navigate("Home")} style={styles.headerIcon}>
                                <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                            </Button>
                        </Left>

                        <Right style={{paddingRight:10}}>
                            <Button onPress={() => alert("you clicked me")} style={styles.headerIcon}>
                                <Icon2 name='ellipsis-v' size={16} color={Color.primaryDark}/>
                            </Button>
                        </Right>
                    </View>
                </Animated.View>

            <Footer style={{height:80}}>
                <FooterTab style={{backgroundColor:'#FFF'}}>
                    <Button transparent>
                    <Text style={[mainStyles.ProductPriceText,{fontSize:16, color:'#000'}]}>UGX 14,500</Text>
                    </Button>
                    <Button onPress={() => alert("Thank you!")} style={{backgroundColor:Color.YellowBackground, justifyContent:'center', alignItems: 'center', marginRight: 20}}>
                        <Text style={[mainStyles.Heading3,{color:Color.primaryDark, textAlign:'center', fontSize: 15}]}>Add to Giftbox</Text>
                    </Button>
                </FooterTab>
            </Footer>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    headerIcon: {
        elevation:0, 
        justifyContent:'center',
        backgroundColor:"#FFFFFF",
        width: 32, 
        height: 32, 
        borderRadius: 32 / 2
    },
    fill: {
        flex: 1,
      },
      content: {
        flex: 1,
      },
      header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
      },
      bar: {
        backgroundColor: 'transparent',
        marginTop: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
      },
      title: {
        color: 'white',
        fontSize: 18,
      },
      scrollViewContent: {
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
        marginTop: 10
      }
});

//make this component available to the app
export default Product;
