import React from 'react';
import { Image, Input } from 'semantic-ui-react';

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
    childnode: <Input icon='search' placeholder='Search...' />
  },
  {
    name: 'Shops',
    path: '/shops',
    childnode: 'Shops'
  },
  {
    name: 'Products',
    path: '/products',
    childnode: 'Products'
  }
];



