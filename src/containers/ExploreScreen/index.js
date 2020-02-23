import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, FlatList} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title,Input, Content, List, ListItem, Item, Icon} from 'native-base';
import mainStyles from '../../common/mainStyles';
import Color from '../../common/Color';
import ProductRowItem from '../../components/ProductRowItem';
import SearchAPI from '../../services/SearchAPI';

// create a component
class ExploreScreen extends Component {
    constructor(){
      super();
      this.state = {
        query: '',
        listItems: []
      }
    }

      async componentDidMount(){
        await SearchAPI.SearchByKeyWord('a')
        .then(data =>{
          this.setState({listItems:data.body})
          console.log(this.state.listItems);
        })
        .catch(error => {
          alert(error);
        })
      }

      getQueryItem = (query) =>
      {
        this.setState({query});

        SearchAPI.SearchByKeyWord(this.state.query)
        .then(data =>{
          this.setState({listItems:data.body})
          console.log(this.state.listItems);
        })
        .catch(error => {
          alert(error);
        })
      }
    
      render() {
        return (
          <Container>
            <Header androidStatusBarColor={Color.PrimaryDark} searchBar rounded style={{backgroundColor:Platform.OS == "android" ? Color.LightRose:""}}>
                <Item>
                    <Icon name="search"/>
                    <Input 
                    autoFocus={true}
                    value={this.state.query}
                    onChangeText={query => this.getQueryItem(query)}
                    placeholder="Search for gifts" />
                    <Icon name="gift"/>
                </Item>
                <Button transparent>
                  <Text>Search</Text>
                </Button>
            </Header>

            <Content>
              <FlatList
              showsVerticalScrollIndicator={false}
                contentContainerStyle={{padding:10}}
                data={this.state.listItems.sort((a, b) => a.displayOrder - b.displayOrder)}
                renderItem={({ item }) => (
                  <ProductRowItem 
                  {...this.props}
                  id={item.id}
                  imageURI={item.imageUrl}
                  name={item.name}
                  description={item.description}/>
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </Content>
          </Container>
        );
    }
}

//make this component available to the app
export default ExploreScreen;
