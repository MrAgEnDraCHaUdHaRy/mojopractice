import React from 'react';
import CounterUI from "./2"
class Counter extends React.Component {
    constructor(){
        super();
        this.state={
            add:0
        }
    }
    increment=()=>{
        this.setState({add:this.state.add+1});
    }
    decrement=()=>{
        this.setState({add:this.state.add-1});
    }
    render(){
        return(
            <>
            <CounterUI count={this.state.add}
            increment={this.increment}
            decrement={this.decrement}
            />
            </>
        )
    }
}
export default Counter