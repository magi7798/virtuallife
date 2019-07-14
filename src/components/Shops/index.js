import React, { Fragment } from 'react';
import { Header, Container, Item, Label, Popup, Select } from 'semantic-ui-react';

import Shoplists from './ShopLists';
import SortOptions from './SortOpt';

class Shops extends React.Component {

  renderLists = Shoplists.map((list, index) => {
    return (
      <Item key={index}>
        <Item.Image src={list.imageSrc} />

        <Item.Content>
          <Item.Header as='a'>{list.company}</Item.Header>
          <Item.Meta>
            <span>{list.meta}</span>
          </Item.Meta>
          <Item.Description>
            {list.description}
          </Item.Description>
          <Item.Extra verticalAlign='bottom'>
            <Label.Group>
            <Popup content='Visitor' trigger={<Label color='blue' icon='users' detail='214' width='10px' />} />
              
              <Label color='red' icon='heart' detail='214' width='10px' />
              <Label color='teal' icon='cart' detail='214' width='10px' />
            </Label.Group>
          </Item.Extra>
        </Item.Content>
      </Item>
    )}
  );

  render() {
    return (
      <Fragment>
        <Header as='h4' style={{ fontSize: '30px', marginBottom: '5px' }} dividing>
          SHOPS
        </Header>
        <Container textAlign='right'>
        
          <pre style={{ fontSize: '130' }}>
            Sort by: <Select placeholder='Visitor: High to Low' options={SortOptions} />
          </pre>
          
        </Container>
        <Item.Group divided>
          {this.renderLists}
        </Item.Group>
      </Fragment>
    );
  };
};

export default Shops;