import React from 'react';
const CounterUI=(props)=>{
    return(
        <>
        <h1>Counter: {props.count}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </>
    )
}
export default CounterUI