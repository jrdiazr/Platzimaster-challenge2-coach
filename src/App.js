import React, { useState } from 'react';
import Header from './Components/Header/';
import Home from './pages/Home';
import { Router } from '@reach/router';
import Details from './pages/Details';
import './App.css';

function App () {
  const [theme, setTheme] = useState('light');

  const handleTheme = (e) => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} handleTheme={handleTheme} />
      <Router>
        <Home path='/' theme={theme} />
        <Details path='/country/:code' theme={theme} />
      </Router>
    </div>
  );
}

export default App;
