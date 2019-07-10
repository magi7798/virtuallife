import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

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

  leftMenuItems = () => {
    const items = ['Home', 'My Space', 'My Shop'];
    let path;
    return items.map(item => {
      if (item === 'Home') {
        path = '/'
      } else {
        path = '/' + item.toLowerCase().replace(/\s/g, '');
      };

      return (
        <Menu.Item key={item} name={item} as={Link} to={path} />
      );
    });
  };

  render() {
    return (     
      <div className='ui left fixed vertical menu' style={divStyle} stackable='true'>
        <div style={{ marginTop: '5%' }}>
          <Menu pointing secondary vertical fluid style={MenuStyle}>
            {this.leftMenuItems()}
          </Menu>
        </div>
      </div>      
    );
  };
};

export default LeftMenus;
