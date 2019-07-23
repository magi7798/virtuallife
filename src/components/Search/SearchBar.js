import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Select, Button } from 'semantic-ui-react';

import itemSources from '../Products/itemSources';
import shopSources from '../Shops/shopSources';
//import ItemPageStyle from '../Products/ItemPageStyle';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'shops', text: 'Shops', value: 'shops' },
  { key: 'products', text: 'Products', value: 'products' },
];

const INITIAL_STATE = {
  isLoading: false,
  value: '',
  results: []
};

const sources = _.concat(itemSources, shopSources);

class SearchItems extends React.Component {

  state = INITIAL_STATE;

  handleSearchChange = (e, { value }) => {
    console.log('All props: ',  { value } );
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (value.length < 1) return this.setState(INITIAL_STATE)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => {
        return re.test(result.item);        
      }

      this.setState({
        isLoading: false,
        results: _.filter(sources, isMatch),
      })
    }, 300)
  };

  handleOnSubmit = (results) => {
    console.log(`submitted result: `, results);
    //this.props.fetchResults(results);
  };
  
  render() {
    
    const { isLoading, results } = this.state;

    //console.log('value: ', this.state.value);
    //console.log('results: ', this.state.results);

    return (
      <Input type='text' placeholder='Search...' action loading={isLoading} 
        onChange={_.debounce(this.handleSearchChange, 500, { leading: true })}>

        <Select compact options={options} defaultValue='All' />        
        <input />        
        <Button type='submit' as={Link} to={`/search/${_.escapeRegExp(this.state.value)}`}
        onClick={() => this.handleOnSubmit(results)}>
          Search
        </Button>

      </Input>     
    );
  };
};

export default SearchItems;
