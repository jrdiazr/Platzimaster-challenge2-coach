import React from 'react';
import './styles.css';
import { Link } from '@reach/router';

const Card = ({ name, population, region, capital, flag, alpha3Code, theme }) => {
  return (
    <Link to={`/country/${alpha3Code}`} className='link-detail'>
      <div className={`card card-${theme}`}>
        <img className='flag-country' alt={`${name} flag`} src={flag} />
        <div className='data-country'>
          <h3 className='country-name'>{name}</h3>
          <p className='data-label'>
          Population: <span>{Intl.NumberFormat().format(population)}</span>
          </p>
          <p className='data-label'>
          Region: <span>{region}</span>
          </p>
          <p className='data-label'>
          Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
