import React, { Fragment } from 'react';
import { Header, Container, Item, Rating, Select } from 'semantic-ui-react';

import Itemlists from './ItemLists';
import SortOptions from './SortOpt';
import SearchItems from './SearchItems';

class Products extends React.Component {

  renderLists = Itemlists.map((list, index) => {
    return (
      <Item key={index}>
        <Item.Image src={list.imageSrc} />

        <Item.Content>
          <Item.Header as='a'>{list.item}</Item.Header>
          <Item.Description>
            {list.price}
          </Item.Description>        
          <Item.Meta>
            <span>{list.company}</span>
          </Item.Meta>          
          <Item.Extra>
            <Rating maxRating={5} defaultRating={3} icon='star' size='small' /> 
          </Item.Extra>
        </Item.Content>
      </Item>
    )}
  );

  render() {
    return (
      <Fragment>
        <Header style={{ fontSize: '30px', marginBottom: '5px' }} dividing>
          PRODUCTS
          <SearchItems />
        </Header>
        <Container textAlign='right'>
        
          <pre style={{ fontSize: '130' }}>
            Sort by: <Select placeholder='Ave. Customer Review' options={SortOptions} />
          </pre>
          
        </Container>
        <Item.Group divided>
          {this.renderLists}
        </Item.Group>
      </Fragment>
    );
  };
};

export default Products;