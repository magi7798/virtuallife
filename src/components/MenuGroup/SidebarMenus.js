import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { sidebarPusher } from '../../actions';
import { sidebarMenus } from './MenuLists/SidebarLists';

class SidebarMenus extends React.Component {

  menuItems = () => {
    const menus = sidebarMenus;

    return menus.map((menu, index) => {
      return (
        <Menu.Item key={index} as={Link} to={menu.path} onClick={() => this.props.sidebarPusher(false)}>
          {menu.childnode}
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <Fragment>
        {this.menuItems()}
      </Fragment>
    );
  };
};

export default connect(null, { sidebarPusher })(SidebarMenus);
