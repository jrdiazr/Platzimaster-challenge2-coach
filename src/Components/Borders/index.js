import React from 'react';
import { Link } from '@reach/router';
import './styles.css';

const Borders = ({ frontiers, theme }) => {
  return (
    <div className='country-borders'>
      <p>Border countries:</p>
      <div className='border-container'>
        {
          frontiers.map(border => {
            return (
              <Link className={`border-link button-${theme}`} key={border.alpha3Code} to={`/country/${border.alpha3Code}`}>
                {
                  border.name
                }
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Borders;
