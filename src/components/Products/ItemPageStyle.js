import _ from 'lodash';
import React from 'react';
import { Grid, Header, Container, Item, Menu, Rating, Dropdown } from 'semantic-ui-react';

const divStyle = {
  textAlign: 'center',
  width: '11%',
  marginTop: '4%',
  borderRight: '15px solid whitesmoke',
  backgroundColor: 'GhostWhite'
};

const MenuStyle = {
  fontSize: '18px',
  borderRightColor: 'transparent'
};

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

class ItemPage extends React.Component {

  state = INITIAL_STATE;

  handleSortedSources = (e, { value }) => {
    //console.log('sort value: ', { value });
    const sortObj = _.find(sortOpts, { value });

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
      <Grid>
        <Grid.Row columns={2} >
          <Grid.Column width={2}>
            <div className='ui left fixed vertical menu' style={divStyle} stackable='true'>
              <div style={{ marginTop: '5%' }}>
                <Menu pointing secondary vertical fluid style={MenuStyle}>
                  <Menu.Item>
                    Category
                    </Menu.Item>
                </Menu>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={13}>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
};

export default ItemPage;