import React from 'react';

const Students = (props) => {
    return (
      <div>
        <ul>
          <li>Name: {props.name}</li>
          <li>Age: {props.age}</li>
        </ul>
      </div>
    )
  }

  export default Students;