import React, { useState, useEffect } from 'react';
import SearchBar from './../Components/SearchBar/index';
import CardList from './../Components/CardList/index';
import API from '../utils/api';

const Home = ({ theme }) => {
  const [data, setData] = useState([]);
  const api = new API();

  const getData = () => api.getDataCountries()
    .then(data => setData(data));

  useEffect(() => {
    getData();// eslint-disable-next-line
  }, []);

  const handleSelect = (event) => {
    const region = event.target.value;
    api.getCountriesRegion(region)
      .then(data => setData(data));
  };

  const handleChange = (event) => {
    const name = event.target.value;
    if (name === '') {
      return getData();
    }
    api.getCountriesByName(name)
      .then(data => setData(data));
  };

  return (
    <div className='home'>
      <SearchBar handleSelect={handleSelect} handleChange={handleChange} theme={theme} />
      <CardList data={data} theme={theme} />
    </div>
  );
};

export default Home;
