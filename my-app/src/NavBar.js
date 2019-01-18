import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Header, Dropdown } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = {
      paddingBottom: '32px',
      paddingTop: '32px',
    };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted>
          <Menu.Item>
            <Dropdown icon='large bars'>
              <Dropdown.Menu>
                <Dropdown.Item>Consulting</Dropdown.Item>
                <Dropdown.Item>Preventive Maintenance</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          <Menu.Item position='right'>
            <Header inverted>Free Estimates: 808-780-6369</Header>
          </Menu.Item>
        </Menu>
    );
  }
}

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default NavBar;
