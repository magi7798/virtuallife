import React from 'react';
import { connect } from 'react-redux';

import ItemPage from '../Products/ItemPageStyle';

class SearchResultPage extends React.Component {  
  render() {
    const { results } = this.props;
    console.log('result page: ', results);
    return (
      <ItemPage sources={results} />
    );
  };
};

const mapStateToProps = (state) => ({
  results: state.SearchResult.results
});

export default connect(mapStateToProps)(SearchResultPage);


