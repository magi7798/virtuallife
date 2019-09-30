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

export const sidebarMenus = [
  // {
  //   name: 'Signin',
  //   path: '/signin',
  //   childnode: 
  //     <Fragment>
  //       <p>Hello User!</p>   
  //     </Fragment>
  // },
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
  },
  {
    name: 'Sign Out',
    path: '/',
    childnode: 'Sign Out'
  }
];

export const SettingsMenus = [
  {
    name: 'My Account',
    path: '/settings/account',
    childnode: 'My Account'
  }
];

export const CategoryMenus = [
  
  {
    name: 'Shop Category',
    path: null,
    childnode: 'Category'
  }
]