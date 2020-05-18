import React from 'react';

const Pets = (props) => {
    return (
      <div>
        <ul>
          <li>Name: {props.name}</li>
          <li>Color: {props.color}</li>
          <li>Type: {props.type}</li>
          <li>Species: {props.species}</li>
        </ul>
      </div>
    )
  }

  export default Pets;