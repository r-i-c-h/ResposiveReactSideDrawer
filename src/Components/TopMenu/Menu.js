import React from 'react';
import Burger from '../SideDrawer/Burger';
import '../../styles/Menu.css';

const Menu = ({isDrawerOpen, toggleDrawer}) => (
  <header className="menu">
    <nav className="menu__nav">      

      <Burger isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <div className="menu__logo"><a href="/">&gt;LOGO&lt;</a></div>
      
      <div className="menu__emptyPushApartDiv"/>
      
      <div className="menu__links">
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">Location</a></li>
        </ul>
      </div>
    
    </nav>
  </header>
);

export default Menu;