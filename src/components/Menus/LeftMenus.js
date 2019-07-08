import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const divStyle = {
  textAlign: 'center',
  width: '11%',
  marginTop: '3%',
  borderRight: '15px solid whitesmoke'
};

const MenuStyle = {
  fontSize: '20px',
  borderRightColor: 'transparent'
};

class LeftMenus extends React.Component {
  /*
  handleItemClick = (e) => {
    console.log(e.target.text + ' is clicked');        
  };
  */

  leftMenuItems = () => {
    const ItemNames = ['My Room', 'My Shop'];
    return ItemNames.map(item => {
      const path = '/' + item.toLowerCase().replace(/\s/g, '');
      return (
        <Menu.Item key={item} name={item} as={Link} to={path} />
      );
    });
  };

  render() {
    return (
     
      <div className='ui left fixed vertical menu' style={divStyle} stackable='true'>
        <div style={{ marginTop: '30px' }}>
          <Menu pointing secondary vertical fluid style={MenuStyle}>
            {this.leftMenuItems()}
          </Menu>
        </div>
      </div>
      
    );
  };
};

export default LeftMenus;
