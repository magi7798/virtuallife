import _ from 'lodash';
import React, { Fragment } from 'react';
import { Header, Container, Item, Rating, Dropdown } from 'semantic-ui-react';

const sortOpts = [
  { key: 'itemAZ', value: 'itemAZ', sortby: 'item', orders: 'asc', text: 'A to Z' },
  { key: 'itemZA', value: 'itemZA', sortby: 'item', orders: 'desc', text: 'A to Z' },
  { key: 'priceLow', value: 'priceLow', sortby: 'price', orders: 'asc', text: 'Price: Low to High' },
  { key: 'priceHigh', value: 'priceHigh', sortby: 'price', orders: 'desc', text: 'price: High to Low' },
  { key: 'rating', value: 'rating', sortby: 'rating', orders: 'desc', text: 'Ave. Customer Review' }
];

const INITIAL_STATE = {
  value: 'rating',
  sortby: 'rating',
  orders: 'desc'
};

class ItemForm extends React.Component {

  state = INITIAL_STATE;

  handleSortedSources = (e, { value }) => {
    //console.log('sort value: ', { value });
    const sortObj = _.find(sortOpts, { value } );    
    
    setTimeout(() => {
      //console.log('sortObj: ', sortObj);
      this.setState({ value, sortby: sortObj.sortby, orders: sortObj.orders })
    }, 300);
  };

  RenderLists = (sortby, orders) => {
    var sortedLists;
    //console.log('state sortby: ', sortby);
    //console.log('state orders: ', orders);
    sortedLists = _.orderBy(this.props.sources, sortby, orders).map((list, index) => {
      return (
        <Item key={index}>
          <Item.Image src={list.imageSrc} />

          <Item.Content>
            <Item.Header as='a'>{list.item}</Item.Header>
            <Item.Description>
              Price: ${list.price}
            </Item.Description>
            <Item.Meta>
              <span>{list.company}</span>
            </Item.Meta>
            <Item.Extra>
              <Rating maxRating={5} defaultRating={list.rating} icon='star' size='small' />
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    });
    return sortedLists;
  };

    render() {
      const { value, sortby, orders } = this.state;

      return (
        <Fragment>
          <Header style={{ fontSize: '20px', marginBottom: '5px' }} dividing>
            PRODUCTS
          </Header>

          <Container textAlign='right'>

            <pre style={{ fontSize: '130' }}>
            Sort by: <Dropdown selection options={sortOpts} defaultValue={value}
              onChange={this.handleSortedSources} />
            </pre>

          </Container>
          <Item.Group divided unstackable>

            {this.RenderLists(sortby, orders)}

          </Item.Group>
        </Fragment>
      );
    };
  };

  export default ItemForm;