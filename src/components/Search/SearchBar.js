import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Select, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import itemSources from '../Products/itemSources';
import shopSources from '../Shops/shopSources';
import { getSearchValue, getSearchResults } from '../../actions';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'shops', text: 'Shops', value: 'shops' },
  { key: 'products', text: 'Products', value: 'products' },
];

const sources = _.concat(itemSources, shopSources);

class SearchItems extends React.Component {

  handleSearchChange = (e, { value }) => {
    
    this.props.getSearchValue(value);

    setTimeout(() => {
      if (this.props.value.length < 1)        
        return this.props;

      const re = new RegExp(_.escapeRegExp(this.props.value), 'i');
      const isMatch = result => re.test(result.item);
      
      this.props.getSearchResults(_.filter(sources, isMatch));
    }, 300);    
  };

  render() {
    console.log('value: ', this.props.value);
    console.log('results: ', this.props.results);
    return (
      <Input type='text' placeholder='Search...' action loading={this.props.isLoading} onChange={_.debounce(this.handleSearchChange, 500, {
        leading: true,
      })}>        
        <Select compact options={options} defaultValue='All' />
        <input />
        <Button type='submit' as={Link} to={`/search/${_.escapeRegExp(this.props.value)}`}>
          Search
        </Button>
      </Input>      
    );
  };
};

const mapStateToProps = (state) => ({
  isLoading: state.search.isLoading,
  value: state.search.value,
  results: state.search.results
})

export default connect( mapStateToProps, { getSearchValue, getSearchResults })(SearchItems);
