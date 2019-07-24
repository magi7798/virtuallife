import React, { Fragment } from 'react';
import { Label, Icon, Button } from 'semantic-ui-react';

//['My Moneybox', 'My Cart', 'Sign in', 'Settings']
export default [
  {
    name: 'My Moneybox',
    path: '/mymoneybox',
    childnode:
      <Button as='div' labelPosition='right'>
        <Button color='brown'>
          <Icon name='star' />
          My Moneybox
        </Button>
        <Label as='a' basic color='brown' pointing='left'>
          <Icon name='dollar sign' />100.00
        </Label>
      </Button>
  },
  {
    name: 'My Cart',
    path: '/mycart',
    childnode:
      <Fragment>
        <Icon name='cart arrow down' />
        My Cart
      </Fragment>
  },
  {
    name: 'Sign in',
    path: '/signin',
    childnode:
      <Button basic color='blue' >
        <Icon name='user'/>
        Sign in
      </Button>
  },
  {
    name: 'Settings',
    path: '/settings/account',
    childnode: 'Settings'
  }
];