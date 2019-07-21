import _ from 'lodash';
import React, { Fragment } from 'react';
import { Header, Container, Item, Label, Popup, Dropdown } from 'semantic-ui-react';

const sortOpts = [
  { key: 'nameAZ', value: 'nameAZ', sortby: 'company', orders: 'asc', text: 'A to Z' },
  { key: 'nameZA', value: 'nameZA', sortby: 'company', orders: 'desc', text: 'Z to A' },
  { key: 'follow', value: 'follow', sortby: 'follow', orders: 'desc', text: 'Follow: High to Low' },
  { key: 'like', value: 'like', sortby: 'like', orders: 'desc', text: 'Like: High to Low' },
  { key: 'sold', value: 'sold', sortby: 'sold', orders: 'desc', text: 'Sold: High to Low' }
];

const INITIAL_STATE = {
  value: 'follow',
  orders: 'desc'
};

class Shops extends React.Component {

  state = INITIAL_STATE;

  handleSortedSources = (e, { value }) => {
    //console.log('sort value: ', { value });
    const sortObj = _.find(sortOpts, { value });

    setTimeout(() => {
      //console.log('sortObj: ', sortObj);
      this.setState({ value, sortby: sortObj.sortby, orders: sortObj.orders })
    }, 300);
  };

  showNumFormat = (num) => {
    var showNum;
    const thousand = 1000;
    const million = 1000000;
    const counts = _.isNumber(num);
    if ( counts >= thousand && counts < million) {
      showNum = _.round(counts/thousand) + 'K';
    } else if (counts >= million) {
      showNum = _.round(counts/thousand, 1) + 'M';
      console.log(showNum);
    } else {
      showNum = counts;
    };
    console.log(showNum);
    return showNum;
  };

  RenderLists = (sortby, orders) => {
    var sortedLists;
    sortedLists = _.orderBy(this.props.sources, sortby, orders).map((list, index) => {
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
            <Item.Extra>
              <Label.Group>
                <Popup content='Follow' trigger={<Label color='blue' icon='users' detail={list.follow} width='10px' />} />

                <Popup content='Like' trigger={<Label color='red' icon='heart' detail={list.like} width='10px' />} />

                <Popup content='Sold' trigger={<Label color='teal' icon='cart' detail={list.sold} width='10px' />} />
              </Label.Group>
            </Item.Extra>
          </Item.Content>
        </Item>
      )
    });
    return sortedLists;
  };

    render() {
      const { value, sortby, orders } = this.state;
      return (
        <Fragment>
          <Header as='h4' style={{ fontSize: '20px', marginBottom: '5px' }} dividing>
            SHOPS
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

  export default Shops;