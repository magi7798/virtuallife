import React from 'react';
import { Menu, Input, Label, Icon, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const menuItemStyle = {
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingLeft: '40px',
  paddingRight: '40px',
  fontSize: '15px'
}; 

class Header extends React.Component {
  /*
  handleItemClick = (name) => {
    console.log('clicked ', name);
  };
  */

  renderTabs = (names) => {
    return names.map(menu => {
      let path;
      if (menu !== 'Home') {
        if (menu !== 'Logout') {
          path = '/' + menu.toLowerCase().replace(/\s/g, '');
        } else {
          path = '/login';
        }
      } else {
        path = '/';
      };  
      
      return (
        <Menu.Item key={menu} name={menu} as={Link} to={path} style={menuItemStyle} />
      );
    });
  }

  renderLeftMenu = () => {    
    const MenuNames = ['Shops', 'Products'];

    return this.renderTabs(MenuNames);
  }

  renderRightMenu = () => {
    const MenuNames = ['My Cart', 'Log in'];

    return this.renderTabs(MenuNames);
  }

  

  renderSettingMenu = () => {
    const settingMenuNames = ['Profile'];
    return settingMenuNames.map(settingMenu => {
      let path = '/' + settingMenu.toLowerCase().replace(/\s/g, '');
      return (    
        <Dropdown.Item key={settingMenu} text={settingMenu} as={Link} to={path} />   
      );
    })

  }
  render() {
    return (
      <Menu borderless attached='top' style={{ backgroundColor: 'Lavender' }}>
        <Menu.Item name='home' as={Link} to={'/'} style={menuItemStyle} >
          <Image src='./images/Free_logo.svg' alt='profile pic' size='tiny' centered />
        </Menu.Item>    

        <Menu.Item style={menuItemStyle}>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>

        {this.renderLeftMenu()}

        <Menu.Menu position='right'>
          <Menu.Item
            name='moneybox'
            onClick={this.handleItemClick}
            style={menuItemStyle}
          >
            My Moneybox:
            <Label size='big' color='teal'><Icon name='dollar sign' />100.00</Label>
          </Menu.Item>

          {this.renderRightMenu()}
          
          <Dropdown
            button
            className='icon'
            pointing
            labeled
            icon='settings'
          >
            <Dropdown.Menu>
              {this.renderSettingMenu()}
            </Dropdown.Menu>            

          </Dropdown>
        
        </Menu.Menu>
      </Menu>
    );
  };
};

export default Header;