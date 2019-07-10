import React, { Fragment } from 'react';
import { Label, Icon } from 'semantic-ui-react';

//['My Moneybox', 'My Cart', 'Sign in', 'Settings']
export default [
  {
    name: 'My Moneybox',
    path: '',   
    childnode: 
      <Fragment>
        My Moneybox:
        <Label size='big' style={{ backgroundColor: 'DarkGoldenrod' }}>
          <Icon name='dollar sign' />100.00
        </Label>
      </Fragment>
  },
  {
    name: 'My Cart',
    path: '/mycart',
    childnode: 'My Cart'
  },
  {
    name: 'Sign in',
    path: '/signin',
    childnode: 'Sign in'
  },
  {
    name: 'Settings',
    path: '/settings/account',
    childnode: 'Settings'
  }
];