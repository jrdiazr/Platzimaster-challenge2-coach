import React from 'react';
import './styles.css';

const NavBar = ({ theme }) => {
  const handleClick = (e) => {
    window.history.back();
  };
  return (
    <div className='navbar-container'>
      <button className={`back-button button-${theme}`} onClick={handleClick}>←   Back</button>
    </div>
  );
};

export default NavBar;
