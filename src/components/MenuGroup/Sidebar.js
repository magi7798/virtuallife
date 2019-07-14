import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { InitialMenus, MemberMenus, SettingsMenus, CategoryMenus } from './MenuLists/SidebarLists';

const divStyle = {
  textAlign: 'center',
  width: '11%',
  marginTop: '4%',
  borderRight: '15px solid whitesmoke',
  backgroundColor: 'GhostWhite'
};

const MenuStyle = {
  fontSize: '18px',
  borderRightColor: 'transparent'
};

class LeftMenus extends React.Component {
  /*
  handleItemClick = (e) => {
    console.log(e.target.text + ' is clicked');        
  };
  */

  /*
  sidebarChanger = () => {
    let changeMenus = InitialMenus;
    if (this.props.name === 'Settings' )
      changeMenus = SettingsMenus;
    return changeMenus;
  };
  */
  whichPage = () => {
    let menus;
    const { page } = this.props;
    console.log('page: ', page);
    if ( page === '/settings/account') {
      menus = SettingsMenus;
    } else if ( page === '/shops' || page === '/products') {
      menus = CategoryMenus;
    } else if ( page === '/') {
      menus = MemberMenus;
    } else {
      menus = InitialMenus;
    };
    return menus;  
        
  };

  sidebarMenus = () => {
    const  menus = this.whichPage();    

    return menus.map((menu, index) => {
      return (
        <Menu.Item key={index} as={Link} to={menu.path} >
          {menu.childnode}
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className='ui left fixed vertical menu' style={divStyle} stackable='true'>
        <div style={{ marginTop: '5%' }}>
          <Menu pointing secondary vertical fluid style={MenuStyle}>
            {this.sidebarMenus()}
          </Menu>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { page: state.page }
};

export default connect( mapStateToProps )(LeftMenus);
