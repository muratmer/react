import React from "react";
import "./Output.css";


const output = (props) =>{
    
    
    return (<div className="Output" onClick = {props.click}>
        <p>I am a person</p>
        <p>My Name is {props.name} and I am {props.age} years old</p>
    </div>)
}

export default output;