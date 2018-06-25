import React from 'react';
import '../../styles/SideDrawer.css';

const SideDrawer = props => {
  const drawerClassList = props.show ? 'side-drawer open' : 'side-drawer';
  
  return (
    <nav className={drawerClassList}>
      <ul>
        <li> <a href="/">Page Here</a> </li>
        <li> <a href="/">Page There</a> </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
