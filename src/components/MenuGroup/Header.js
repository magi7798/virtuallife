import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import HeaderLeft from './MenuLists/HeaderLeft';
import HeaderRight from './MenuLists/HeaderRight';
import { sidebarPusher } from '../../actions';

const menuStyle = {
  backgroundColor: 'ivory',
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

  handleHideClick = () => this.props.sidebarPusher(false)
  handleShowClick = () => this.props.sidebarPusher(true)

  handleItemClick = (menu) => {
    console.log('clicked ', menu.name);
    //this.props.fetchSidebarMenus(menu.path);
  };

  setLink = (menu) => {
    if (menu.name === 'Searchbar' || menu.name === 'My Moneybox') {
      return menu.childnode;
    } else {
      return (
        <Link to={menu.path} onClick={() => this.handleItemClick(menu)} style={{ color: 'Goldenrod' }}>
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
    const menuNames = HeaderLeft;
    return this.renderTabs(menuNames);
  };
  
  renderRightMenu = () => {
    const menuNames = HeaderRight;
    const signIn = [
      {
        name: 'Sign in',
        path: '/signin',
        childnode:
          <Button basic color='blue' >
            <Icon name='user'/>
            Sign in
          </Button>
      }
    ];
    if (this.props.isSigned !== true) {
      console.log('is Signed:', this.props.isSigned);
      return this.renderTabs(signIn);
    };
    console.log('is Signed:', this.props.isSigned);
    return this.renderTabs(menuNames);
  };

  render() {
    return (
      <Fragment>

        <Menu fixed='top' borderless style={menuStyle}>

          <Button basic color='blue' icon='sidebar' onClick={this.handleShowClick} style={{ marginTop: '10px', marginBottom: '10px' }}/>

          {this.renderLeftMenu()}

          <Menu.Menu position='right'>

            {this.renderRightMenu()}

          </Menu.Menu>
        </Menu>
      </Fragment>
    );
  };
};

const mapStateToProps = (state) => (
  {
    isSigned: state.isSigned
  }
);

export default connect(mapStateToProps, { sidebarPusher })(Header);
