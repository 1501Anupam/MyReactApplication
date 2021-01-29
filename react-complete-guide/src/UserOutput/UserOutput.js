import React from 'react'
import './UserOutput.css'

const userOutput = (props)=> {
    return (
        <div className="ParaStyle">
            <p> I am {props.name}</p>
            <p>Second Para</p>
        </div>
    );
}

export default userOutput;