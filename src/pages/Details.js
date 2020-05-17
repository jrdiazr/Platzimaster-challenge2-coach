import React, { useEffect, useState } from 'react';
import CountryDetails from './../Components/CountryDetails/index';
import API from '../utils/api';
import NavBar from './../Components/NavBar/index';

const borderFormat = (borders) => {
  let format;
  for (let index = 0; index < borders.length; index++) {
    format = (format ? format + ';' : '') + borders[index];
  }
  return format;
};

const Details = ({ code, theme }) => {
  const [data, setData] = useState({});
  const [borders, setBorders] = useState([]);
  const api = new API();

  useEffect(() => {
    getDataCountry();// eslint-disable-next-line
  }, [code]);

  const getDataCountry = () => {
    api.getDataCountrieByCode(code)
      .then(result => {
        setData(result);
        console.log('g', api.getCountriesByCodes(borderFormat(result.borders)));

        return api.getCountriesByCodes(borderFormat(result.borders));
      })
      .then(result => {
        result.length > 0 && setBorders(result);
      });
  };

  console.log('code', data);

  return (
    <>
      <NavBar theme={theme} />
      <CountryDetails {...data} frontiers={borders} code={code} theme={theme} />
    </>
  );
};

export default Details;
