import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Label, Button, Icon, Header, Image, Comment, Form, Popup, Tab, Card, Menu } from 'semantic-ui-react';

import itemSources from '../Products/itemSources';

class MySpace extends React.Component {

  purchasedItems = () => {
    return (
      <Card.Group itemsPerRow={10}>
        <Card raised image={itemSources[0].imageSrc} />
        <Card raised image={itemSources[1].imageSrc} />
        <Card raised image={itemSources[2].imageSrc} />
        <Card raised image={itemSources[3].imageSrc} />
        <Card raised image={itemSources[4].imageSrc} />
        <Card raised image={itemSources[0].imageSrc} />
        <Card raised image={itemSources[1].imageSrc} />
        <Card raised image={itemSources[2].imageSrc} />
        <Card raised image={itemSources[3].imageSrc} />
        <Card raised image={itemSources[4].imageSrc} />
      </Card.Group>
    );
  };

  purchasedTemplates = () => {
    return (
      <Card.Group itemsPerRow={10}>
        <Card raised image={'./images/templates/1.jpg'} />
        <Card raised image={'./images/templates/2.jpg'} />
        <Card raised image={'./images/templates/3.jpg'} />
        <Card raised image={'./images/templates/4.jpg'} />
        <Card raised image={'./images/templates/5.jpg'} />
        <Card raised image={'./images/templates/6.jpg'} />
        <Card raised image={'./images/templates/7.jpg'} />
        <Card raised image={'./images/templates/8.jpg'} />
        <Card raised image={'./images/templates/1.jpg'} />
        <Card raised image={'./images/templates/2.jpg'} />
      </Card.Group>
    );
  };

  itempanes = () => {
    return (
      [
        { menuItem: 'Bedroom', render: () => <Tab.Pane>{this.purchasedItems()}</Tab.Pane> },
        { menuItem: 'Livingroom', render: () => <Tab.Pane>{this.purchasedItems()}</Tab.Pane> },
        { menuItem: 'Kitchen', render: () => <Tab.Pane>{this.purchasedItems()}</Tab.Pane> },
        { menuItem: 'Outdoor', render: () => <Tab.Pane>{this.purchasedItems()}</Tab.Pane> }
      ]
    );
  };

  templatepanes = () => {
    return (
      [
        { menuItem: 'Room', render: () => <Tab.Pane>{this.purchasedTemplates()}</Tab.Pane> },
        { menuItem: 'Kitchen', render: () => <Tab.Pane>{this.purchasedTemplates()}</Tab.Pane> },
        { menuItem: 'Outdoor', render: () => <Tab.Pane>{this.purchasedTemplates()}</Tab.Pane> }
      ]
    );
  };

  renderComments = () => {
    return (
      <Comment.Group threaded>
        

        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <span>Today at 5:42PM</span>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              {/* <a href=''>Reply</a> */}
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/small/elliot.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <span>Yesterday at 12:30AM</span>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
            <Comment.Actions>
              <a href=''>Reply</a>
            </Comment.Actions>
          </Comment.Content>

          <Comment.Group>
            <Comment>
              <Comment.Avatar as='a' src='/images/avatar/small/jenny.jpg' />
              <Comment.Content>
                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <span>Just now</span>
                </Comment.Metadata>
                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                <Comment.Actions>
                  {/* <a href=''>Reply</a> */}
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <span>5 days ago</span>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              {/* <a href=''>Reply</a> */}
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <span>5 days ago</span>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
            <Comment.Actions>
              {/* <a href=''>Reply</a> */}
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea rows={1} />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
    );
  };

  renderButtons = () => {
    return (
      <Fragment>
        <Button as='div' labelPosition='right'>
          <Button color='blue'>
            <Popup content='Neighbors' trigger={
              <Icon name='fork' />} />
          </Button>
          <Label as='a' basic color='blue' pointing='left'>
            2,048
          </Label>
        </Button>
        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Popup content='Like' trigger={
              <Icon name='heart' />} />
          </Button>
          <Label as='a' basic color='red' pointing='left'>
            2,048
          </Label>
        </Button>
      </Fragment>
    );
  };

  renderMySpace = () => {
    return (
      <Fragment>
        <Segment attached='top' color='red' textAlign='center' style={{ paddingTop: '5px', paddingBottom: '5px' }}>
          <Grid>
            <Grid.Row columns={2} verticalAlign='middle'>
              <Grid.Column width={3} style={{ textAlign: 'left' }}>
                <Popup content='Visitor' trigger={
                  <Label basic color='blue'>
                    <Icon name='users' />
                    2,048
                  </Label>} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h5'>My Space name</Header>
              </Grid.Column>
              <Grid.Column width={3}>
                <Button basic size='mini' floated='right' as={Link} to='/myspace/edit' >
                  Edit MySpace
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment attached placeholder textAlign='center'>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                {/* <div>My Space page</div>
                    <div>Google VR</div> */}
                <Image src='./images/templates/1.jpg' size='massive' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
    );
  };

  state = { activeItem: 'Items' };

  handleStorageClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  storagePane = () => {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <Menu pointing secondary>
          <Menu.Item name='My Storage' header></Menu.Item>
          <Menu.Item 
            name='Items' 
            active={activeItem === 'Items'} 
            onClick={this.handleStorageClick} 
          />
          <Menu.Item
            name='Templates'
            active={activeItem === 'Templates'}
            onClick={this.handleStorageClick}
          />
        </Menu>

        <Segment style={{ height: '350px' }}>
          {
            activeItem === 'Items' ?
              <Tab panes={this.itempanes()} />
            :
              <Tab panes={this.templatepanes()} />            
          }
          
        </Segment>
      </Fragment>
    );
  };

  render() {
    return (
      <Grid>
        <Grid.Row columns={2} style={{ paddingBottom: '3px', height: '480px' }}>
          <Grid.Column width={9}>
            {this.renderMySpace()}
            <Grid.Row style={{ paddingTop: '5px', textAlign: 'right' }}>
              {this.renderButtons()}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={7} style={{ height: '450px' }}>
            <Grid.Row style={{ paddingBottom: '20px' }}>
              <Header as='h3' dividing>
                Comments
              </Header>
            </Grid.Row>
            <Grid.Row style={{ height: '450px', overflowY: 'scroll'}}>
              {this.renderComments()}
            </Grid.Row>
            
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {this.storagePane()}
            {/* <Tab panes={this.panes()} /> */}
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  };
};

export default MySpace;