import React from 'react';

import { Button, Menu, Popup } from 'semantic-ui-react';

const Header = () => (
  <Menu>
    <Menu.Item header>Kahoot Points!</Menu.Item>
    <Menu.Item position="right">
      <Popup
        trigger={(
          <Button basic positive>
            Sign up
          </Button>
)}
        content="Coming Soon!"
      />
    </Menu.Item>
  </Menu>
);

export default Header;
