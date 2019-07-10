// ['Logo', 'Searchbar', 'Shops', 'Products']
export const headerLeft = [
  {
    name: 'Logo',
    path: '/',   
    childnode: `<Image src='./images/applogo4_1.png' alt='logo' centered size='small' />`
  },
  {
    name: 'Searchbar',
    path: '',
    childnode: `<Input icon='search' placeholder='Search...' />`
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
//['My Moneybox', 'My Cart', 'Sign in', 'Settings']
export const headerRight = [
  {
    name: 'My Moneybox',
    path: '',   
    childnode: 
      `My Moneybox:
      <Label size='big' style={{ backgroundColor: 'DarkGoldenrod' }}><Icon name='dollar sign' />100.00</Label>`
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
// ['Home', 'My Space', 'My Shop']
export const sidebarLists = [
  {
    name: 'Home',
    path: '/',
    childnode: 'My Cart'
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

