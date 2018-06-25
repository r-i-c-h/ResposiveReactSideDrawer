import React from 'react';
import '../../styles/Burger.css';

const Burger = ({ isDrawerOpen, toggleDrawer}) => {
  let burgerClasses = isDrawerOpen ? 'burger spun' : 'burger';
  const theButt = (
    <button className={burgerClasses} onClick={toggleDrawer}>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
      <div className="burger-line"></div>
    </button>
  );
  
  return theButt;
};

export default Burger;