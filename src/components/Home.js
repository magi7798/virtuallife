import React, { Fragment } from 'react';
import { Grid, Card, Image, Icon, Header, Advertisement } from 'semantic-ui-react';

const columnStyle = {
  paddingLeft: '5px',
  paddingRight: '5px'
};

const itemLists = [
  {
    image: '/images/avatar/large/elliot.jpg',
    header: 'Elliot Baker',
    meta: 'Friend',
    description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
    extra: `<Icon name='user' /> 22 Friends`
  },
  {
    image: '/images/avatar/large/elliot.jpg',
    header: 'Elliot Baker',
    meta: 'Friend',
    description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
    extra: `<Icon name='user' /> 22 Friends`
  },
  {
    image: '/images/avatar/large/elliot.jpg',
    header: 'Elliot Baker',
    meta: 'Friend',
    description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
    extra: `<Icon name='user' /> 22 Friends`
  },
  {
    image: '/images/avatar/large/elliot.jpg',
    header: 'Elliot Baker',
    meta: 'Friend',
    description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
    extra: ` 22 Friends`
  },
  {
    image: '/images/avatar/large/elliot.jpg',
    header: 'Elliot Baker',
    meta: 'Friend',
    description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
    extra: `22 Friends`
  },
];

class Home extends React.Component {

  bestLists = (lists) => {
    return lists.map( list => {
      return (
       
          <Grid.Column styel={columnStyle}>
            <Card>
              <Image src={list.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{list.header}</Card.Header>
                <Card.Meta>
              <span className='date'>{list.meta}</span>
            </Card.Meta>
            <Card.Description>
              {list.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='home' />              
            {list.extra}
          </Card.Content>
        </Card>
        </Grid.Column>
        
      );
    }); 
  };

  renderGridColumns = () => {
    return this.bestLists(itemLists);
  };

  bannerImage = () => {
    return <Image src='./images/banner.jpg' alt='banner' centered />
  }

  render() {
    return (
      <Fragment>
       
        <Advertisement unit='billboard' centered style={{ marginBottom: '50px'}}>
          <Image src='./images/banner7.jpg' alt='banner' centered />
        </Advertisement>
        
        <Grid divided='vertically'>
        <Header as='h3' icon='plug' content='Best Spaces' />
          <Grid.Row columns={5}>
          
          {this.renderGridColumns()}
          </Grid.Row>
          <Header as='h3' icon='plug' content='Best Shops' />
          <Grid.Row columns={5}>
          {this.renderGridColumns()}
          </Grid.Row>
          <Header as='h3' icon='plug' content='Best Products' />
          <Grid.Row columns={5}>
          {this.renderGridColumns()}
          </Grid.Row>
        </Grid>
       
      </Fragment>

    );
  };
};

export default Home;