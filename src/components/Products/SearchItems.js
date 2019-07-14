import _ from 'lodash';
import React from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react';

import ItemLists from './ItemLists';

const initialState = { isLoading: false, results: [], value: '' }

const source = ItemLists;

export default class SearchItems extends React.Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.item })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.item);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        {...this.props}
      />
    )
  }
}
