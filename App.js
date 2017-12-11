import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Spinner, List, ListItem, Tab, Tabs, TabHeading, View, Text, Textarea, Left, Button, Item, Input, InputGroup, Icon, Body, Right, Thumbnail, Title, Footer, FooterTab } from 'native-base';
import {Feather, EvilIcons, MaterialCommunityIcons} from 'react-native-vector-icons';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class App extends React.Component {
  render() {
    return <Container>
      <Header hasTabs>
        <Left> 
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurF30ez2iI67ZYEYiU-aXlyexb9gljDlL4NCaESnxG-f775obWw' }}/>
                <Text>Home</Text>
              </Left>
	          </ListItem>
          </List>  
   	    </Left>
      </Header>
     
      <Tabs>
        <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
        <Content>
	      <Grid>
          <Col size={1}>
            <Left>
              <Thumbnail large source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsDvPr9lHAeiIxR6x8pA7xKP9cs3zGhTE-Oswy_1Gh_pQ4pnjrQ' }} />
            </Left>
          </Col>
          <Col size={3}>
            <Card style={{borderColor: 'white', }}>
              <CardItem>
                <Body>
                    <Row size={1}>
                       <Text style={{fontWeight: 'bold'}}>Harry Potter</Text>
                        <Text note>   @hpotter...</Text>
                    </Row>
                    <Row size={1}>
                        <Text>Wanna visit me at Hogwarts.. Come to platform nine and three quarter . .</Text>
                        <Text style={{color: 'blue'}}>Hogwarts Express</Text>                  
                    </Row>
                </Body>                  
            </CardItem>
            <CardItem>
                <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCVKqseo2eyHYjYl6QbBUaBrE9-5xjjE3yXnPDhGuCpR8ka1N'}} style={{height: 150, width: null, flex: 1}}/>                
            </CardItem>
            <CardItem>
                <Left>
                  <Button transparent>
                    <Feather name="message-circle" size={20} color="#d3d3d3" /><Body><Text note>      60</Text></Body>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <EvilIcons name="retweet" size={20} color="#d3d3d3" /><Left><Text note>2</Text></Left>
                  </Button>
                </Body>
                <Body>
                  <Button transparent>
                    <EvilIcons name="heart" size={20} color="#d3d3d3" /><Body><Text note>19</Text></Body>
                  </Button>
                </Body>
                <Right>
                  <Feather name="mail" size={20} color="#d3d3d3" />
                </Right>
              </CardItem>
            </Card>
          </Col>
        </Grid>  

        <Grid>
          <Col size={1}>
            <Left>
              <Thumbnail large source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_y4c1qc6vg6HJNnaOfct3d1LhhgcsL_XREzKWojcKdDezFjS3' }} />
            </Left>
          </Col>
          <Col size={3}>
            <Card style={{borderColor: 'white', }}>
              <CardItem>
                <Body>
                <Row size={1}>
                  <Text style={{fontWeight: 'bold'}}>Ron Weasley</Text>
                  <Text note>   @rweasley...</Text>
                </Row>
                <Row size={1}>
                  <Text>C'mon lets' get to the burrow . .</Text>
                  <Text style={{color: 'blue'}}>burrow</Text>
                </Row>
                </Body>
                <Right>
                  <Text note>24 m</Text>
                </Right>
              </CardItem>
              <CardItem>
                <Image source ={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjhHR9D6h56P8UPZsQNEu3BDz-sT6x29mtPYk7Tl9jA302zjP'}} style={{height: 100, width: 700, flex: 1}}/>       
                  <Button transparent>
                    <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvNBgknTrqy2GZih8oiZ3dRH7zlDDUGz-DX_i6S7DP8o65K7LQSA'}}/>
                  </Button>
              </CardItem>
            </Card>
          </Col>
        </Grid>
  </Content>
</Tab> 
<Tab heading={ <TabHeading><Icon name="search" /></TabHeading>}>
</Tab>
<Tab heading={ <TabHeading><Icon name="notifications" /></TabHeading>}>
</Tab>
<Tab heading={ <TabHeading><Icon name="mail" /></TabHeading>}>
</Tab>
</Tabs>


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
  }
}
