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

const names = ['My Room', 'My Shop'];
const leftMenuItem = names.map(name => {
  const path = '/' + name.toLowerCase().replace(/\s/g, '');
  return (
    <Menu.Item key={name} name={name} as={Link} to={path} />
  );
});

class LeftMenus extends React.Component {
  /*
  handleItemClick = (e) => {
    console.log(e.target.text + ' is clicked');        
  };
  */
  render() {
    return (
      <div className='ui left fixed vertical menu' style={divStyle} stackable='true'>
        <div style={{ marginTop: '30px' }}>
          <Menu pointing secondary vertical fluid style={MenuStyle}>
            {leftMenuItem}
          </Menu>
        </div>
      </div>
    );
  };
};

export default LeftMenus;
