import React from 'react';
import Input2 from "./2"
class Input extends React.Component {
    constructor(){
        super();
        this.state={
            info:'',
            error:""
        }
    }
    myfun = (e) => {
        if (!Number(e.target.value))
          this.setState({
            error: "Please enter numbers only",
          });
        else
          this.setState({
            info: e.target.value,
            error: "",
          });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
          info: e.target.value,
        });
      };


    render(){
        return(
            <>
            <Input2 info={this.state.info}
            error={this.state.error}
            myfun={this.myfun}
            />
            </>
        )
    }
}
export default Input