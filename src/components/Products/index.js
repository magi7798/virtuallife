import React from 'react';

import ItemPageStyle from './ItemPageStyle';
import itemSources from './itemSources';

class Products extends React.Component {

  render() {
    return (
      <ItemPageStyle sources={itemSources}/>
    );
  };
};

export default Products;