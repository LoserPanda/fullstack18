import React from 'react';

const Country = ({name, capital, population, flag}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>capital: {capital}</p>
            <p>population: {population}</p>
            <img src={flag} alt="flag" height={100} />
        </div>
    );
};

export default Country;