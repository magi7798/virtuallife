import React from 'react';

import ShopForm from './ShopForm';
import shopSources from './shopSources';

class Products extends React.Component {

  render() {
    return (
      <ShopForm sources={shopSources}/>
    );
  };
};

export default Products;