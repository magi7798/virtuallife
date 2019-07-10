import React, { Fragment } from 'react';
import { Menu, Input, Label, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

//import { headerLeft, headerRight } from './MenuLists';

const menuStyle = {
  backgroundColor: 'Ivory',
  paddingLeft: '40px',
  paddingRight: '40px'
};

const menuItemStyle = {
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '15px',
  paddingRight: '10px',
  fontSize: '16px',
  color: 'Goldenrod'
};

class Header extends React.Component {
  /*
  handleItemClick = (name) => {
    console.log('clicked ', name);
  };
  */

  setChildNode = (menu) => {
    let childnode;
    if (menu === 'Logo') {
      childnode = <Image src='./images/applogo4_1.png' alt='logo' centered size='small' />;
    } else if (menu === 'Searchbar') {
      childnode = <Input icon='search' placeholder='Search...' />;
    } else if (menu === 'My Moneybox') {
      childnode =
        <Fragment>
          My Moneybox:
          <Label size='big' style={{ backgroundColor: 'DarkGoldenrod' }}><Icon name='dollar sign' />100.00</Label>
        </Fragment>
    } else {
      childnode = menu;
    };

    return childnode;
  };

  setPath = (menu) => {
    let path;
    if (menu === 'Logo') {
      path = '/';
    } else if (menu === 'Logout') {
      path = '/signin';
    } else if (menu === 'Settings') {
      path = '/settings/account';
    } else {
      path = '/' + menu.toLowerCase().replace(/\s/g, '');
    };
    return path;
  };
  
  setLink = (menu) => {
    let path = this.setPath(menu);
    if ( menu === 'Searchbar' || menu === 'My Moneybox') {
      return <Fragment>{this.setChildNode(menu)}</Fragment>;
    } else {
      return <Link to={path} style={{color: 'Goldenrod'}}>{this.setChildNode(menu)}</Link>;
    };
  };

  renderTabs = (menus) => {
    return menus.map((menu, index) => (
      <Menu.Item key={index} name={menu} style={menuItemStyle}>
        {this.setLink(menu)}
      </Menu.Item>
    ));
  };

  renderLeftMenu = () => {
    const MenuNames = ['Logo', 'Searchbar', 'Shops', 'Products'];
    return this.renderTabs(MenuNames);
  };

  renderRightMenu = () => {
    const MenuNames = ['My Moneybox', 'My Cart', 'Sign in', 'Settings'];
    return this.renderTabs(MenuNames);
  };

  render() {
    return (
      <Menu fixed='top' borderless style={menuStyle}>

        {this.renderLeftMenu()}

        <Menu.Menu position='right'>

          {this.renderRightMenu()}

        </Menu.Menu>
      </Menu>
    );
  };
};

export default Header;