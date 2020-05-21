import React from 'react';

const AboutMe = (props) => {
    return (
        <div>
        <h1>All about Bubu</h1>
        <p>Yo, my name is {props.name} and I'm {props.age}</p>
        </div>
    )
}

export default AboutMe;