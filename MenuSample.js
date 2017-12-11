import React from 'react';
import {Container, Header, Content, Footer, Card, CardItem, FooterTab, Button, List, Body, ListItem, Icon, View, Text, Image, Left, Right, Thumbnail } from 'native-base';
import {FontAwesome, Ionicons, Feather, MaterialCommunityIcons} from 'react-native-vector-icons';

export default class MenuSample extends React.Component {
    render(){
        return(
            <Container>
                <Header />
                <Content style={{backgroundColor:'#ffffff'}}>
                <Card>
                <CardItem>
                     <Thumbnail source={{ uri: 'data:image/jpeg;base64,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' }}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text>Kalai Balamurugan            
                      <Ionicons name="ios-arrow-down" size={20} color="blue"/></Text>
                      <Text note>@kbalamurugan</Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text note style={{fontWeight: 'bold'}}>690<Text note> Following</Text>  653<Text note>  Followers</Text></Text>
                    </Body>
                  </CardItem>
                  </Card>
                  <List>
                    <ListItem icon>
                      <Left>
                      <Feather name="user" size={20} />
                      </Left>
                      <Body>
                        <Text>Profile</Text>
                      </Body>             
                    </ListItem>
                    <ListItem icon>
                      <Left>
                        <Ionicons name="ios-list-box-outline" size={20}/>
                      </Left>
                      <Body>
                        <Text>Lists</Text>
                      </Body>              
                    </ListItem>
                    <ListItem icon>
                      <Left>
                      <Ionicons name="ios-thunderstorm-outline" size={20}/>
                      </Left>
                      <Body>
                        <Text>Moments</Text>
                      </Body>             
                    </ListItem>
                    <ListItem icon>
                      <Left>
                      <MaterialCommunityIcons name="checkbox-multiple-blank-outline" size={20}/>
                      </Left>
                      <Body>
                        <Text>Highlights</Text>
                      </Body>              
                    </ListItem>
                    <ListItem icon>
                      <Body>
                        <Text>Settings and Privacy</Text>
                      </Body>             
                    </ListItem>
                    <ListItem icon>
                      <Body>
                        <Text>Help Centre</Text>
                      </Body>              
                    </ListItem>
                  </List>                   
            </Content>
            <Footer>
              <FooterTab>
                <Button>
                  <FontAwesome name="moon-o" size={20} color="blue" />
                </Button>
                <Button>
                  <Ionicons name="ios-apps-outline" size={20} color="blue" />
                </Button>              
              </FooterTab>
            </Footer>
      </Container>
    )
    };
}
