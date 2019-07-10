import React from 'react';
import { Menu } from 'semantic-ui-react';

import LeftMenus from './Sidebar';

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

class MenuChanger extends React.Component {

  LeftMenuItems = () => {
    const leftMenulists = ['Home', 'My Space', 'My Shop'];
    let path;
    return leftMenulists.map(item => {
      if (item === 'Home') {
        path = '/'
      } else {
        path = '/' + item.toLowerCase().replace(/\s/g, '');
      }
      return <LeftMenus item={leftMenulists} path={path} />;
    });
  };

  /*
      <Menu.Item key={item} name={item} as={Link} to={path} />
  */
  
  render() {
    return (
      <div className='ui left fixed vertical menu' style={divStyle} stackable='true'>
        <div style={{ marginTop: '5%' }}>
          <Menu pointing secondary vertical fluid style={MenuStyle}>
            <this.LeftMenuItems />
          </Menu>
        </div>
      </div>       
    );
  };
};

export default MenuChanger;