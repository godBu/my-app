import React from 'react';

const Students = (props) => {
    return (
      <div>
        <ul>
          <li>StudentName: {props.studentname}</li>
          <li>Age: {props.studentage}</li>
        </ul>
      </div>
    )
  }

  export default Students;