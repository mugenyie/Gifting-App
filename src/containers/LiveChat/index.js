import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container, Header, Left, Body, Right, Button, Title} from 'native-base';

import Color from '../../common/Color';
import mainStyle from '../../common/mainStyles';

export default class LiveChat extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hey there, how can we help you?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Giftsery Support',
            avatar: require('../../../assets/icon_white_bg.png'),
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <Container 
      style={{paddingBottom:10}}>
            <Header style={{backgroundColor:"#fff",paddingTop:2,paddingBottom:4,height:50}}>
                <Left>
                <Button onPress={() => this.props.goToHome()} transparent>
                    <Icon name='arrowleft' size={22} color={Color.primaryDark}/>
                </Button>
                </Left>
                <Body>
                <Title style={[{color:Color.primaryDark},mainStyle.Heading2]}>Chat with us</Title>
                </Body>
                <Right></Right>
            </Header>
            <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1,
              }}
            />
      </Container>
    )
  }
}