import React, { Fragment } from 'react';
import { Image, Input, Icon } from 'semantic-ui-react';

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
    childnode: <Input icon='search' placeholder='Search...' style={{ width: '300px' }} />
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



