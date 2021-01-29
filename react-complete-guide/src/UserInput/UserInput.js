import React from 'react'

const userInput = (props) => {
    
    const style ={
        border: '1px solid green',
        padding: '12px'
      };
    return <input style={style} type="text" onChange={props.userNameChanged} value={props.currentName}></input>
}

export default userInput;