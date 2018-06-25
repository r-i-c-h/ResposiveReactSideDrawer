import React from 'react';
import Burger from '../SideDrawer/Burger';
import '../../styles/Menu.css';

const Menu = ({isDrawerOpen}) => (
  <header className="menu">
    <nav className="menu__nav">
      <Burger />
      <div className="menu__logo"><a href="/">&gt;LOGO&lt;</a></div>
      <div className="menu__emptyPushApartDiv"/>
      <div className="menu__links">
        <ul>
          <li><a href="/">Page Here</a></li>
          <li><a href="/">Page There</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Menu;