import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Button, Icon, Select } from 'semantic-ui-react';

// import itemSources from '../Products/itemSources';
// import shopSources from '../Shops/shopSources';
import searchResult from './searchResult';
import { fetchResults } from '../../actions';

const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'shops', text: 'Shops', value: 'shops' },
  { key: 'products', text: 'Products', value: 'products' },
];

// const INITIAL_STATE = {
//   isLoading: false,
//   value: '',
//   results: [] //searchResults
//   // session (code, type) 
// };

// const sources = _.concat(itemSources, shopSources);
const sources = searchResult;

class SearchItems extends React.Component {

  // state = INITIAL_STATE;

  handleSearchChange = (e,  {value, type} ) => {
    // console.log('All props: ', { value });
    // this.setState({ isLoading: true, value });
  
    setTimeout(() => {
      if (value.length < 1) return this.props.fetchResults(sources);

      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = result => {
        return re.test(result.item);
      }

      this.props.fetchResults(_.filter(sources, isMatch),)
      }, 300)
  };

  handleOnSubmit = (results) => {
    console.log(`submitted result: `, results);
    this.props.fetchResults(results.code, results.type);
  };

  render() {

    const { searchResults } = this.props;

    return (
      <React.Fragment>
        <Input type='text' placeholder='Search...' action size='small'
        // label={<Dropdown defaultValue='.All' options={options} />}
        // labelPosition='left'
          onChange={_.debounce(this.handleSearchChange, 500, { leading: true })} >
          <input size='50' />
          <Select compact options={options} placeholder='All' size='small' />          
           {/* /search?code=${code}&type=${type} */}
          <Button basic size='small' type='submit' as={Link} to={`/search/?code=${searchResults.item_id}&type=${searchResults.type}`}
            onClick={() => this.handleOnSubmit(searchResults)} icon>
            <Icon size='small' name='search' inverted circular/>
          </Button>
        </Input>   
        {/* this.state.result ? 
        <div>Result exists</div> : undefined */}
      </React.Fragment >
        
    );
  };
};

const mapStateToProps = (state) => ({
  searchResults: state.searchResults
});

export default connect(mapStateToProps, { fetchResults })(SearchItems);
