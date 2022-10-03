import React from 'react';
const Input2=(props)=>{
    return(
        <>
        <h1>info: {props.info}</h1>

        <h1>{props.error}</h1>
            <input onChange={props.myfun}></input>
            <button>Submit</button>
        </>
    )
}
export default Input2