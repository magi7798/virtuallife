import _ from 'lodash';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Item, Rating } from 'semantic-ui-react';

import ItemSort from './ItemSort';

class ItemForm extends React.Component {

  RenderLists = () => {
    var sortedLists;
    const { value, orders } = this.props;
    sortedLists = _.orderBy(this.props.sources, value, orders).map((list, index) => {
      //console.log('sorted: ', list)
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
              <Rating maxRating={5} defaultRating={list.rating} icon='star' size='small' />
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    });
    return sortedLists;
  };

    render() {
      const { value, orders } = this.props;
      console.log('value: ', value);
      console.log('orders: ', orders);
      return (
        <Fragment>
          <Header style={{ fontSize: '20px', marginBottom: '5px' }} dividing>
            PRODUCTS
          </Header>

          <Container textAlign='right'>

            <ItemSort sources={this.props.sources} />

          </Container>
          <Item.Group divided>

            {this.RenderLists()}

          </Item.Group>
        </Fragment>
      );
    };
  };

  const mapStateToProps = state => ({
    value: state.sort.value,
    orders: state.sort.orders
  });

  export default connect(mapStateToProps)(ItemForm);