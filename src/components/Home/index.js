import './banner.scss';
import React, { Fragment } from 'react';
import { Grid, Card, Image, Icon, Header, Advertisement } from 'semantic-ui-react';
import ImageGallery from 'react-image-gallery';

import images from './bannerImages';
import { bestSpaces } from './bestLists';

const columnStyle = {
  paddingLeft: '5px',
  paddingRight: '5px'
};

class Home extends React.Component {

  bestLists = (lists) => {
    return lists.map( (list, index) => {
      return (       
        <Grid.Column key={index} styel={columnStyle}>
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
              <Icon name='user' />               
              {list.extra}
            </Card.Content>
          </Card>
        </Grid.Column>        
      );
    }); 
  };

  renderBestSpaces = () => {
    return this.bestLists(bestSpaces);
  };

  renderBestShops = () => {
    return this.bestLists(bestSpaces);
  };

  renderBestProducts = () => {
    return this.bestLists(bestSpaces);
  };

  bannerImage = () => {
    return <Image src='./images/banner.jpg' alt='banner' centered />
  }

  render() {
    return (
      <Fragment>
       
        <Advertisement unit='billboard' centered style={{ marginBottom: '50px', width: '100%', height: '350px'}}>
          {/*<Image src='./images/banner7.jpg' alt='banner' centered />*/}
          <ImageGallery items={images} infinite autoPlay showFullscreenButton={false} showPlayButton={false} showBullets slideInterval={10000}/>
        </Advertisement>
        
        <Grid divided='vertically'>
        <Header as='h3' icon='universal access' content='Best Spaces' />
          <Grid.Row columns={5}>          
            {this.renderBestSpaces()}
          </Grid.Row>
          <Header as='h3' icon='warehouse' content='Best Shops' />
          <Grid.Row columns={5}>
            {this.renderBestShops()}
          </Grid.Row>
          <Header as='h3' icon='product hunt' content='Best Products' />
          <Grid.Row columns={5}>
            {this.renderBestProducts()}
          </Grid.Row>
        </Grid>
       
      </Fragment>
    );
  };
};

export default Home;