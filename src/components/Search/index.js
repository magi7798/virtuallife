import React from 'react';

import ItemPageStyle from '../Products/ItemPageStyle';

class SearchResults extends React.Component {
  state = { results: [] };

  componentDidUpdate = () => {
    console.log('searched results: ', this.state.results);
  };

  setResults = (results) => {
    this.setState({ results });
  };

  render() {
    const { results } = this.state;
    return (
      <ItemPageStyle sources={results} />
    );
  };
};

export default SearchResults;