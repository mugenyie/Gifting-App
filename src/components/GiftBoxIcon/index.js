//import liraries
import React, { Component } from 'react';
import { Button } from 'native-base';

import IconWithBadge from '../IconWithBadge';
import {connect} from 'react-redux';
import Color from '../../common/Color';

// create a component
class GiftBoxIcon extends Component {
    render() {
        return (
            <IconWithBadge color={Color.Grey} name={"gift"} size={25} badgeCount={this.props.giftBoxItems.length} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        giftBoxItems : state
    }
}

//make this component available to the app
export default connect(mapStateToProps)(GiftBoxIcon);
