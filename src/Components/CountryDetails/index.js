import React from 'react';
import './styles.css';
import Borders from '../Borders';
const toArrayNames = array => array.map(item => item.name);

const CountryDetails = ({ name, nativeName, population, region, capital, flag, subregion, topLevelDomain, currencies, languages, frontiers, theme }) => {
  if (!name) {
    return 'loading';
  }

  return (
    <div className='country-data'>
      <img className='flag' alt={`${name} flag`} src={flag} />
      <div className={`data-country-container data-country-container-${theme}`}>
        <h1 className='country-name'>{name}</h1>
        <div className='details-section'>
          <section className='detail__left-section'>
            <p className='data-label'>
          Native Name: <span>{nativeName}</span>
            </p>
            <p className='data-label'>
          Population: <span>{Intl.NumberFormat().format(population)}</span>
            </p>
            <p className='data-label'>
          Region: <span>{region}</span>
            </p>
            <p className='data-label'>
          Sub Region: <span>{subregion}</span>
            </p>
            <p className='data-label'>
          Capital: <span>{capital}</span>
            </p>
          </section>
          <section className='detail__right-section'>
            <p className='data-label'>
          Top Level Domain: <span>{topLevelDomain}</span>
            </p>
            <p className='data-label'>
              Currencies: <span>{toArrayNames(currencies).toString()}</span>
            </p>
            <p className='data-label'>
          Languages: <span>{toArrayNames(languages).toString()}</span>
            </p>
          </section>
        </div>
        <Borders frontiers={frontiers} theme={theme} />
      </div>
    </div>
  );
};

export default CountryDetails;
