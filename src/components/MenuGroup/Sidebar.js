import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { InitialMenus, MemberMenus, SettingsMenus } from './MenuLists/SidebarLists';

const divStyle = {
  textAlign: 'center',
  width: '11%',
  marginTop: '3.4%',
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

  sidebarMenus = () => {
    const menus = MemberMenus;

    return menus.map((menu, index) => {
      return (
        <Menu.Item key={index} name={menu.childnode} as={Link} to={menu.path} />
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

export default LeftMenus;
