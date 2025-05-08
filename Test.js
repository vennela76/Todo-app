import React from "react";
class Test extends React.Component{
    render(){
      return(
        <div>
            <center>
                <h1>name:{this.props.name} age={this.props.age}</h1>
            </center>
        </div>
      )  
    }
}
export default Test;