import _ from 'lodash';
import React, { Fragment } from 'react';
import { Header, Container, Item, Rating, Grid, Divider, Dropdown } from 'semantic-ui-react';

import itemSources from '../Products/itemSources';

const sources = itemSources;

const ContainerStyle = {
  textAlign: 'right',
  marginBottom: '0px',
  fontSize: '15px',
  fontWeight: '300',
  color: 'darkgrey'
};

var itemCounter = 0;

class ItemForm extends React.Component {

  itemNumOptions = () => {
    var i;
    const itemNumObj = [];
    for ( i = 1; i <= 10; i++) {
      if (i === 10) {
        itemNumObj.push({text: '10+', value: '10+'});
      } else {
        itemNumObj.push({text: i, value: i});
      };
    };
    return itemNumObj;
  }

  onChangeHandler = (e, { value }) => {
  
    console.log('onChange target: ', value);    
  };
  
  RenderLists = (value) => {
    const cartLists = sources.map((list, index) => {
      ++itemCounter;
      return (
        <Fragment key={index}>
          <Divider clearing style={{ marginTop: '0px' }} />
          <Grid style={{ textAlign: 'right', marginBottom: '5px' }}>
            <Grid.Column width={9}>
              <Item.Group divided unstackable>
                <Item key={index}>
                  <Item.Image src={list.imageSrc} />

                  <Item.Content>
                    <Item.Header as='a'>{list.item}</Item.Header>
                    <Item.Meta>
                      <span>{list.company}</span>
                    </Item.Meta>
                    <Item.Extra>
                      <Rating maxRating={5} defaultRating={list.rating} icon='star' size='small' />
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3' color='red'>
                ${list.price}
              </Header>
            </Grid.Column>
            <Grid.Column width={4}>
              <Dropdown 
                lazyLoad 
                placeholder='1' 
                //defaultValue={this.itemNumOptions()[0].value}
                value={value}
                options={this.itemNumOptions()} 
                onChange={this.onChangeHandler} 
              />
          </Grid.Column>
          </Grid>
        </Fragment>
      );
    });
    return cartLists;
  };

  render() {
    
    return (
      <Fragment>

        <Header style={{ fontSize: '20px', marginBottom: '5px' }}>
          SHOPPING CART
        </Header>

        <Container style={ContainerStyle}>
          <Grid>
            <Grid.Column width={9} />
            <Grid.Column width={3}>
              Price
            </Grid.Column>
            <Grid.Column width={4}>
              Quantity
            </Grid.Column>
          </Grid>
        </Container>

        {this.RenderLists()}

        <Divider clearing />

        <Header as='h2' floated='right'>
          Subtotal ({itemCounter} Item): ${_.round(_.sumBy(sources, 'price'),2)}
        </Header>

      </Fragment>
    );
  };
};

export default ItemForm;