import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchMemberMenus, sidebarPusher } from '../../actions';
import { sidebarMenus } from './MenuLists/SidebarLists';

class SidebarMenus extends React.Component {

  menuItems = () => {
    const { isSigned } = this.props;
    let menus = sidebarMenus;
    if (!isSigned) {
      menus = [
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
    }; 

    const menuItems = menus.map((menu, index) => {
      return (
        <Menu.Item key={index} as={Link} to={menu.path} 
          onClick={() => {
            this.props.sidebarPusher(false);
            if (menu.name === 'Sign Out')
              this.props.fetchMemberMenus(false);
            }
          }>
          {menu.childnode}
        </Menu.Item>
      );
    });

    return menuItems;
  };

  render() {
    return (
      <Fragment>
        {this.menuItems()}
      </Fragment>
    );
  };
};

const mapStateToProps = (state) => (
  {
    isSigned: state.isSigned
  }
);

export default connect(mapStateToProps, { fetchMemberMenus, sidebarPusher })(SidebarMenus);
