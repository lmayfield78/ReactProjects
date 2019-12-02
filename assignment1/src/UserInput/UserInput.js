import React from 'react';

const userInput = (props) => {
    const inputstyle = {
        border: '2px solid red',


    }
    return(

        <input 
        style={inputstyle}
        type="text" 
        onChange={props.changed} 
        value={props.currentUsername}></input>
    )
}

export default userInput;

