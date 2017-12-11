import React from 'react'
import { Container, Header, Content, List, ListItem, Tab, Tabs, TabHeading, View, Text, Textarea, Left, Button, Item, Input, InputGroup, Icon, Body, Right, Thumbnail, Title, Footer, FooterTab } from 'native-base';
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
                <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/GettingStartedCongratulations.png' }}/>
                <Text>Home</Text>
              </Left>
	          </ListItem>
          </List>  
   	  </Left>
      </Header>
     
      <Tabs>
        <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
        <Content>
	      <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/GettingStartedCongratulations.png' }} />
              </Left>
              <Body>
                <Text>Smarter Every Dev</Text>	
                <Text note>Doing what <MaterialCommunityIcons name="refresh" size={20} color="#4F8EF7" />you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>30 m</Text>
              </Right>
            </ListItem>
  	    </List>
        <List>
          <Right>
          <Textarea disabled backgroundColor="#d3d3d3" placeholder="" style={{width: 250, height: 100}} />
          </Right>
        </List>
	    <Tabs>
        <Tab heading={ <TabHeading><Feather name="message-circle" size={20} color="#4F8EF7" /><Text>60</Text></TabHeading>}>
        </Tab>
        <Tab heading={ <TabHeading><EvilIcons name="retweet" size={20} color="#4F8EF7" /><Text>2</Text></TabHeading>}>
        </Tab>
        <Tab heading={ <TabHeading><EvilIcons name="heart" size={20} color="#4F8EF7" /><Text>19</Text></TabHeading>}>		 
        </Tab>
        <Tab heading={ <TabHeading><Feather name="mail" size={20} color="#4F8EF7" /></TabHeading>}>
        </Tab>
      </Tabs>
        

		<List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/GettingStartedCongratulations.png' }} />
              </Left>
              <Body>
                    <Text>Smarter Every Dev</Text>
              <Text note>Doing what <MaterialCommunityIcons name="refresh" size={20} color="#4F8EF7" />you like will always keep you happy . .</Text>
              <Text textC olor="#4F8EF7">Hi</Text>
              </Body>
                <Right>
                <Text note>30 m</Text>
              </Right>
            </ListItem>
  	</List>
	<Right>
	<Textarea disabled backgroundColor="#d3d3d3" placeholder="" style={{width: 250, height: 100}} />
	</Right>
	<Tabs>
        <Tab heading={ <TabHeading><Feather name="message-circle" size={20} color="#4F8EF7" /><Text>60</Text></TabHeading>}>
	</Tab>
 	<Tab heading={ <TabHeading><EvilIcons name="retweet" size={20} color="#4F8EF7" /><Text>2</Text></TabHeading>}>
	</Tab>
 	<Tab heading={ <TabHeading><EvilIcons name="heart" size={20} color="#4F8EF7" /><Text>19</Text></TabHeading>}>		 
	</Tab>
 	<Tab heading={ <TabHeading><Feather name="mail" size={20} color="#4F8EF7" /></TabHeading>}>
	</Tab>
	</Tabs>
	         


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
            <Button>
              	<Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
    </Container>
  }
}