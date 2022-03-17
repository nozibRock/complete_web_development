import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flags, capital, region, area, population} = props.country ;
    // console.log(props.country);
    return (
      <div className="country">
        <h3>Country Name: {name.common} </h3>
        <img src={flags.svg} alt={name.official}  />
        <p>Capital: {capital} </p>
        <p>Region: {region} </p>
        <p>Total Area: {area}</p>
        <p>Total Population : {population}</p>
      </div>
    );
};

export default Country;