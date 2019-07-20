import React, { Fragment } from 'react';
import { Image, Icon } from 'semantic-ui-react';

import { SearchItems } from '../../Search/SearchBar';

// ['Logo', 'Searchbar', 'Shops', 'Products']
export default [
  {
    name: 'Logo',
    path: '/',
    childnode: <Image src='./images/applogo4_1.png' alt='logo' centered size='small' />
  },
  
  {
    name: 'Searchbar',
    path: '',
    childnode: <SearchItems />
  },
  
  {
    name: 'Shops',
    path: '/shops',
    childnode:
      <Fragment>
        <Icon name='warehouse' />
        Shops
      </Fragment>
  },
  {
    name: 'Products',
    path: '/products',
    childnode:
      <Fragment>
        <Icon name='product hunt' />
        Products
      </Fragment>
  }
];



