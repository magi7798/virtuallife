import React from 'react';
import { connect } from 'react-redux';

import ItemForm from '../Products/ItemForm';

class SearchResults extends React.Component {

  componentDidUpdate = () => {
    console.log('searched results: ', this.props.results);
  };

  render() {
    const { results } = this.props;
    return (
      <ItemForm sources={results} />
    );
  };
};

const mapStateToProps = (state) => ({
  results: state.search.results
});

export default connect(mapStateToProps)(SearchResults);