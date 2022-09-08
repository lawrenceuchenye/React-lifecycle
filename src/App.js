import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
          counter:5,
          mount:true
      }

      console.log("Constructor");
      this.increment=()=>this.setState({counter:this.state.counter+1,mount:this.state.mount});
      this.decrement=()=>this.setState({counter:this.state.counter-1,mount:this.state.mount});

      this.toggle=()=>this.setState({counter:this.state.counter,mount:!this.state.mount});
  }
  
  componentDidMount(){
      console.log("Component Did Mount");
      console.log("+------------------+");
  }

  render(){
      console.log("Render");
      return(
          <div className="App">
             <div>
               <button onClick={()=>this.toggle()} disabled={this.state.mount}> MOUNT </button>
                <button onClick={()=>this.toggle()} disabled={!this.state.mount}> UNMOUNT </button>
               </div>

          { this.state.mount && (<div>
                 <h1>Count: {this.state.counter}</h1>
                 <div>
                     <button onClick={()=>this.increment()}> ADD </button>
                      <button onClick={()=>this.decrement()}> MINUS </button>
                   </div>
                  </div>)}
                </div>
      );
  }

  componentDidUpdate(prevProps,prevState,snapshots){
      console.log("Component Did Update");
      console.log("+------------------+");
  }

  componentWillUnmount(){
      console.log("Component Will Unmount");
      console.log("+---------------------+");
  }

}

export default App; 
