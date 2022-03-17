import React from 'react';

const Country = (props) => {
    return (
      <div>
        <h2>This is Country.</h2>
        <h3>Country Name: {props.name} </h3>
        <p>
          Total Area of {props.name} is: {props.area}
        </p>
        <p>
          Total Population of {props.name} is: {props.population}
        </p>
      </div>
    );
};

export default Country;