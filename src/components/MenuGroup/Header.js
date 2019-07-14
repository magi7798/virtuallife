import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchSidebarMenus } from '../../actions';
import HeaderLeft from './MenuLists/HeaderLeft';
import HeaderRight from './MenuLists/HeaderRight';

const menuStyle = {
  backgroundColor: 'Ivory',
  paddingLeft: '5px',
  paddingRight: '40px'
};

const menuItemStyle = {
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '15px',
  paddingRight: '10px',
  fontSize: '16px',
  color: 'Goldenrod'
};

class Header extends React.Component {
  
  handleItemClick = (menu) => {
    console.log('clicked ', menu.name);
    this.props.fetchSidebarMenus(menu.path);
  }; 

  setLink = (menu) => {
    if ( menu.name === 'Searchbar' || menu.name === 'My Moneybox') {
      return menu.childnode;
    } else {
      return (
        <Link to={menu.path} onClick={() => this.handleItemClick(menu)} style={{color: 'Goldenrod'}}>
          {menu.childnode}
        </Link>
      );
    };
  };

  renderTabs = (menus) => {
    return menus.map((menu, index) => (
      <Menu.Item key={index} name={menu.name} style={menuItemStyle}>
        {this.setLink(menu)}
      </Menu.Item>
    ));
  };

  renderLeftMenu = () => {
    const MenuNames = HeaderLeft;
    return this.renderTabs(MenuNames);
  };

  renderRightMenu = () => {
    const MenuNames = HeaderRight;
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

export default connect(null, { fetchSidebarMenus })(Header);