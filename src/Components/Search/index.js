import React from 'react';
import search from '../../images/search-dark.png';
import './styles.css';

const Search = ({ handleChange, theme }) => {
  return (
    <div className={`search search-${theme}`}>
      <img className='search-icon' src={search} alt='Searc icon' />
      <input
        onChange={handleChange}
        className={`search-input search-input-${theme}`}
        type='text'
        placeholder='Search for a country...'
      />
    </div>
  );
};

export default Search;
