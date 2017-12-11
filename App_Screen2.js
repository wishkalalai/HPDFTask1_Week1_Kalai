import React, { Component } from 'react';
import { Container, Header, Footer, Content, FooterTab, Item, Input, Icon, Button, Text } from 'native-base';
import {Feather} from 'react-native-vector-icons';
export default class SearchBarExample extends Component {
  render() {
    return (
      <Container>
        <Header searchBar>
          <Item>
            <Feather name="arrow-left" size={20} color="blue" />
            <Input placeholder="   Search Twitter" />
          </Item>
        </Header>
        <Content/>
        <Footer>
        <FooterTab>
          <Button active>
            <Text>All</Text>
          </Button>
          <Button>
            <Text>Mentions</Text>
          </Button>
          <Button >
            <Icon name="settings"/>
          </Button>
        </FooterTab>
      </Footer>
      </Container>
    );
  }
}