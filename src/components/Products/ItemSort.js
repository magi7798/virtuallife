import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';

import { sortByValue, sortInOrders } from '../../actions';

const sortOpts = [
  { key: 'name', value: 'name', sortby: 'item', orders: 'asc', text: 'A to Z' },
  { key: 'priceLow', value: 'priceLow', sortby: 'price', orders: 'asc', text: 'Price: Low to High' },
  { key: 'priceHigh', value: 'priceHigh', sortby: 'price', orders: 'desc', text: 'price: High to Low' },
  { key: 'rating', value: 'rating', sortby: 'rating', orders: 'desc', text: 'Ave. Customer Review' }
];

class ItemSort extends React.Component {

  handleSortedSources = (e, { value }) => {    
    const sortObj = _.find(sortOpts, { value });
    setTimeout(() => {
      this.props.sortByValue(sortObj.sortby);
      this.props.sortInOrders(sortObj.orders);
    }, 300);
  };

  render() {
    const { value } = this.props;
    return (
      <pre style={{ fontSize: '130' }}>
        Sort by: <Dropdown selection options={sortOpts} defaultValue={value}
          onChange={this.handleSortedSources} />
      </pre>
    )
  }
};

const mapStateToProps = state => ({
  value: state.sort.value,
  orders: state.sort.orders
});

export default connect(mapStateToProps, { sortByValue, sortInOrders })(ItemSort);