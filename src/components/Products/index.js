import React from 'react';

import ItemForm from './ItemForm';
import itemSources from './itemSources';

class Products extends React.Component {

  render() {
    return (
      <ItemForm sources={itemSources}/>
    );
  };
};

export default Products;