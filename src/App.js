import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
          counter:5
      }
      console.log("Constructor");
      this.increment=()=>this.setState({counter:this.state.counter+1});
      this.decrement=()=>this.setState({counter:this.state.counter-1});
  }
  

  render(){
      console.log("Render");
      return(
          <div className="App">
             <h1>Count: {this.state.counter}</h1>
             <div>
                 <button onClick={()=>this.increment()}> ADD </button>
                 <button onClick={()=>this.decrement()}> MINUS </button>
               </div>
            </div>
      );
  }
}

export default App; 
