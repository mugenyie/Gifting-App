import {StyleSheet} from 'react-native';
import Color from './Color';

const mainStyles = StyleSheet.create({
    Heading1:{
        fontSize:22, fontFamily:'Montserrat-Regular'
    },
    Heading2: {
        fontSize:20, fontFamily:'Montserrat-Regular',
    },
    Heading3: {
        fontSize:18, fontFamily:'Montserrat-Regular'
    },
    Heading3Light: {
        fontSize:18, fontFamily:'Montserrat-Light'
    },
    Heading4: {
        fontSize:16, fontFamily:'Montserrat-Light'
    },
    Heading1Light: {
        fontSize:22, fontFamily:'Montserrat-Light'
    },
    Heading2Light: {
        fontSize:20, fontFamily:'Montserrat-Light'
    },
    TextRegular: {
        fontSize:14,fontFamily:'OpenSans-Regular'
    },
    TextMinor: {
        fontSize: 13,color:'#999',fontFamily:'OpenSans-Regular'
    },
    TextCaption: {
        fontSize:13,fontFamily:'OpenSans-Regular',fontWeight:'bold',color:Color.PrimaryDark
    },
    IconText: {
        fontSize:8, fontFamily:'Montserrat-Regular',fontWeight:'bold',color:Color.PrimaryDark
    },
    ProductNameText: {
        fontSize:13, fontFamily:'OpenSans-Regular'
    },
    ProductPriceText: {
        fontSize:13, fontFamily:'OpenSans-Regular',fontWeight:'bold',color:Color.PrimaryDark
    },
    Thumbnail: {
        width:60,height:60,borderRadius:5,borderWidth:0.3,borderColor:Color.LightRose
    }
});

export default mainStyles;