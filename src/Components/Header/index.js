import React from 'react';
import ligthMoon from '../../images/ligth-moon.png';
import './styles.css';
import { Link } from '@reach/router';

const Header = ({ theme, handleTheme }) => {
  return (
    <header className={`header header-${theme}`}>
      <Link to='/' className='home-link'>
        <h1 className='main-title'>Where in the world?</h1>
      </Link>
      <div className='theme'>
        <img className='theme-icon' src={ligthMoon} alt='Change theme' />
        <span onClick={handleTheme}>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
