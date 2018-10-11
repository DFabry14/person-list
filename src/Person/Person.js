import React from 'react'
import './Person.css'

const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old! I enjoy {props.hobbies}.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />        
            </div>
    )
}


export default Person