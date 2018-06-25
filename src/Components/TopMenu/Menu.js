import React from 'react';
import Burger from './Burger';
import '../../styles/Menu.css';

const Menu = ({didSpin}) => (
  <header className="menu">
    <nav className="menu__nav">
      {/* <Burger didSpin={didSpin}/> */}
      <div className="menu__logo"><a href="/">&gt;LOGO&lt;</a></div>
      <div className="menu__emptyPushApartDiv" />
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