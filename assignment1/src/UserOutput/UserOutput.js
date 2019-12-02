import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className = "UserOutput"> 
            <p>That person {props.username} is awesome! </p>
            <p>And you know it's true!</p>
        </div>

    )
}

export default userOutput;