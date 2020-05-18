import React from 'react';

const Movies = (props) => {
    return (
        <div>
            <ul>
                <li>Title: {props.title}</li>
                <li>Description {props.description}</li>
                <li>Recommend: {props.recommend}</li>
            </ul>
        </div>
    )
}

export default Movies;