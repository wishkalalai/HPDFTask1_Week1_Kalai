import React from 'react';
import { AppRegistry} from 'react-native';
import {Container, Drawer, Header, Content, Button, List, ListItem, Icon, Text, Body, Left, Right, Thumbnail } from 'native-base';

import SideBar from './MenuSample';

export default class DrawerSample extends React.Component { 
  
    closeDrawer() {
      this._drawer._root.close()
    };
    openDrawer() {
      this._drawer._root.open()
    };
    
    render() {
    return (
      <Drawer
          ref={(ref) => { this._drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()} >

          <Container>
            <Header>
              <Left>
                <Button transparent />
                <Icon name='arrow-back' />
              </Left>
              <Right>
                <Button transparent onPress={()=> this.openDrawer()}>
                <Icon name='menu' />
                </Button>
              </Right>
            </Header>
            <Content>
              <Body>
                  <Text>Twitter Android Profile Screenshot</Text>
             </Body>     
            </Content>
          </Container>
      </Drawer>
    );
  }
}

AppRegistry.registerComponent('DrawerSample', () => DrawerSample);