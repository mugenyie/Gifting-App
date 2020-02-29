import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Content, List, ListItem} from 'native-base';
import mainStyles from '../../common/mainStyles';
import Color from '../../common/Color';

class ProductRowItem extends Component {
  render() {
    const {imageURI ,name, description, id} = this.props;
    return (
        <ListItem>
            <View style={{flex:0.5}}>
                <Image 
                style={mainStyles.Thumbnail}
                source={{uri:imageURI}}
                />
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Product",{productId:id})} style={{flex:1}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={[mainStyles.ProductNameText,{flexWrap:'wrap'}]}>{name}</Text>
                    <Text style={[mainStyles.TextRegular,{color:Color.Grey,flexWrap:'wrap'}]}>{description}</Text>
                </View>
            </TouchableOpacity>
        </ListItem>
    );
  }
}

export default ProductRowItem;
