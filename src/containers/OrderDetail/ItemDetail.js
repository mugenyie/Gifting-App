import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Color from '../../common/Color';
import mainStyles from '../../common/mainStyles';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {title, body} = this.props
    return (
        <Text>
            <Text style={[mainStyles.TextRegular,styles.summaryTitle]}>{title}:</Text> 
            <Text style={[mainStyles.TextRegular,styles.summaryBody]}> {body}</Text>
        </Text>
    );
  }
}

const styles = StyleSheet.create({
    summaryTitle: {
        fontWeight:'bold',
        fontSize:13,
        color:Color.Grey
    },
    summaryBody: {
        
    }
});

export default ItemDetail;
