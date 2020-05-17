import React from 'react';
import Search from '../Search/';
import './styles.css';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const SearchBar = ({ handleSelect, handleChange, theme }) => {
  return (
    <div className={`search-bar search-bar-${theme}`}>
      <Search handleChange={handleChange} theme={theme} />
      <label>
        <select className={`regions-filter regions-filter-${theme}`} onChange={handleSelect} defaultValue=''>
          <option disabled value=''>
          Filter by Region
          </option>

          {regions.map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
