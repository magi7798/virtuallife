import React from 'react';
import { Grid, Segment, Button, Header, Tab, Card, Image } from 'semantic-ui-react';

import itemSources from '../Products/itemSources';

class EditMySpace extends React.Component {

  purchasedItems = () => {
    return (
      <Card.Group itemsPerRow={6}>
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
        <Card raised image={itemSources[0].imageSrc} />
        <Card raised image={itemSources[1].imageSrc} />
      </Card.Group>
    );
  };

  panes = () => {
    return (
      [
        { menuItem: 'Room', render: () => <Tab.Pane>{this.purchasedItems()}</Tab.Pane> },
        { menuItem: 'Kitchen', render: () => <Tab.Pane>{this.purchasedItems()}</Tab.Pane> },
        { menuItem: 'Outdoor', render: () => <Tab.Pane>{this.purchasedItems()}</Tab.Pane> }
      ]
    );
  };

  render() {
    return (
      <Grid>
        <Grid.Row columns={2}>          
          <Grid.Column width={9}>
            <Segment attached='top' color='red' textAlign='center' style={{ paddingTop: '5px', paddingBottom: '5px' }}>
              <Grid>
                <Grid.Row verticalAlign='middle'>
                  <Grid.Column>
                    <Header as='h5'>My Space name</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment attached placeholder textAlign='center'>
              <Image src='./images/templates/1.jpg' size='massive' />
            </Segment>
            <Grid.Row>
              <Grid.Column>                    
                <Button basic size='mini' floated='right'>Save</Button>
                <Button basic size='mini' floated='right'>Delete</Button>                    
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>          
          <Grid.Column width={7}>
            <Tab panes={this.panes()} />
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row style={{ paddingTop: '10px' }}>
          <Tab panes={this.panes()} />
        </Grid.Row>
      </Grid>
    );
  };
};

export default EditMySpace;