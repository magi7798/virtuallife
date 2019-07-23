import React from 'react';

import ShopPageStyle from './ShopPageStyle';
import shopSources from './shopSources';

class Products extends React.Component {

  render() {
    return (
      <ShopPageStyle sources={shopSources}/>
    );
  };
};

export default Products;