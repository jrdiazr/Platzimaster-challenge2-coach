import React from 'react';
import Card from '../Card/';
import './styles.css';

const dataMock = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CardList = ({ data = dataMock, theme }) => {
  return (
    <div className={`card-container card-container-${theme}`}>
      {data.map((country) => {
        return <Card key={country.name} {...country} theme={theme} />;
      })}
    </div>
  );
};

export default CardList;
