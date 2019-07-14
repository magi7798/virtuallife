import React, { Fragment } from 'react';
import { Button, Icon } from 'semantic-ui-react';

// ['Home', 'My Space', 'My Shop']
export const InitialMenus = [
  {
    name: 'Home',
    path: '/',
    childnode: 'Home'
  },
  {
    name: 'Signin',
    path: '/signin',
    childnode: 
      <Fragment>
        <p>Sign in to enjoy virtual life.</p>
        <Button basic color='blue'>
          <Icon name='user' />
          Sign in
        </Button>
      </Fragment>
  }
];

export const MemberMenus = [
  {
    name: 'Home',
    path: '/',
    childnode: 'Home'
  },
  {
    name: 'My Space',
    path: '/myspace',
    childnode: 'My Space'
  },
  {
    name: 'My Shop',
    path: '/myshop',
    childnode: 'My Shop'
  }
];

export const SettingsMenus = [
  {
    name: 'Account',
    path: '/settings/account',
    childnode: 'Account'
  }
];

export const CategoryMenus = [
  ...MemberMenus,
  {
    name: 'Shop Category',
    path: null,
    childnode: 'Category'
  }
]