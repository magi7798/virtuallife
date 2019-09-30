import _ from 'lodash';
import React, { Fragment } from 'react';
import { 
  Header, Container, Item, Rating, Grid, Divider, Dropdown, Rail, Ref, Sticky, Card, Button, Icon 
} from 'semantic-ui-react';

import itemSources from '../Products/itemSources';

const sources = itemSources;

const ContainerStyle = {
  textAlign: 'right',
  marginBottom: '0px',
  fontSize: '15px',
  fontWeight: '300',
  color: 'darkgrey'
};

var Initial_State = [];

if (sources.length === 0) {
  sources.length = 0;
} else {
  for (var i = 0; i < sources.length; i++) {
    Initial_State.push({ item_id: sources[i].item_id, value: 1, price: sources[i].price });
  }
};

class ItemForm extends React.Component {
  state = { items: Initial_State, cartLists: sources };
  contextRef = React.createRef();
  buttonRef = React.createRef();

  totalItemNum = () => {
    const itemNum = _.sumBy(this.state.items, 'value');
    if (itemNum <= 1) {
      return `${itemNum} item`;
    }
    return `${itemNum} items`;
  }

  itemNumOptions = () => {
    let i;
    const itemNumObj = [];
    for (i = 1; i <= 10; i++) {
      if (i === 10) {
        itemNumObj.push({ text: '10+', value: '10+' });
      } else {
        itemNumObj.push({ text: i, value: i });
      };
    };
    return itemNumObj;
  }

  onChangeHandler = (e, index, { value }) => {
    e.preventDefault();
    console.log('onChange target: ', value, index);
    const stateItems = this.state.items;
    let newState = stateItems.map((item) => {
      if (item.item_id === this.state.cartLists[index].item_id) {
        item.value = value;
      }
      return item;
    });
    this.setState({ items: newState });
  };

  onRemoveHandler = (e, list) => {
    console.log('remove button clicked: ', list.item_id);
    // console.log('source item id: ', this.state.sources[0].item_id);
    const newCartLists = _.filter(this.state.cartLists, (eachList) => eachList.item_id !== list.item_id);
    const newItemNums = _.filter(this.state.items, (eachItem) => eachItem.item_id !== list.item_id);
    // console.log('new sources: ', newCartLists);
    this.setState({items: newItemNums, cartLists: newCartLists});
  }

  TotalSum = () => {
    const { items } = this.state;
    // console.log('total sum: ', _.sumBy(items, (o) => { return _.multiply(o.price, o.value)}));
    return _.sumBy(items, (o) => { return _.multiply(o.price, o.value) });
  };

  RenderLists = (items, cartLists) => {
    const renderCartLists = cartLists.map((list, index) => {
      const price = _.round(list.price, 2);
      return (
        <Fragment key={index}>
          <Divider clearing style={{ marginTop: '0px' }} />
          <Grid style={{ textAlign: 'right', marginBottom: '5px' }}>
            <Grid.Column width={9}>
              <Grid.Row>
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
              </Grid.Row>
              <Grid.Row>
                <Button color='violet' inverted floated='right' size='mini' ref={this.buttonRef}
                onClick={(e) => this.onRemoveHandler(e, list)}>
                  Remove
                  <Icon name='right chevron' />
                </Button>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as='h3' color='red'>
                {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </Header>
            </Grid.Column>
            <Grid.Column width={4}>

              <Dropdown
                placeholder={this.itemNumOptions()[0].value.toString()}
                value={items[index].value}
                options={this.itemNumOptions()}
                onChange={(e, { value }) => this.onChangeHandler(e, index, { value })}
              />

            </Grid.Column>
          </Grid>
        </Fragment>
      );
    });
    return renderCartLists;
  };

  render() {
    const { items, cartLists } = this.state;
    console.log('Initial state: ', items);
    return (
      <Ref innerRef={this.contextRef}>
        <Grid centered>

          <Grid.Row columns={2}>

            <Grid.Column width={12} >
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

              {this.RenderLists(items, cartLists)}

              <Divider clearing />

              <Header as='h2' floated='right'>
                Subtotal ({this.totalItemNum()}): {_.round(this.TotalSum(), 2)
                  .toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </Header>
            </Grid.Column>

            <Grid.Column width={4}>
              {/* <div className='ui right fixed vertical menu' style={divStyle} stackable='true'>
              <div style={{ marginTop: '5%' }}> */}

              {/* <Rail position='right'> */}
              {/* <Sticky context={this.contextRef} pushing> */}
              <Card>
                <Card.Content>
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
              {/* </Sticky> */}
              {/* </Rail> */}

              {/* </div>
            </div> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Ref>
    );
  };
};

export default ItemForm;