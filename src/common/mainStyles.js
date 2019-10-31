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
    TextCaption: {
        fontSize:13,fontFamily:'OpenSans-Regular',fontWeight:'bold',color:Color.primaryDark
    },
    IconText: {
        fontSize:8, fontFamily:'Montserrat-Regular',fontWeight:'bold',color:Color.primaryDark
    },
    ProductNameText: {
        fontSize:13, fontFamily:'OpenSans-Regular'
    },
    ProductPriceText: {
        fontSize:13, fontFamily:'OpenSans-Light',fontWeight:'bold',color:Color.YellowText
    }
});

export default mainStyles;