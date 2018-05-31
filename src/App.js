import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyComponent />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render(){
    return(     
      <button onClick={this.buttonClicked}>
       {this.state.isToggleOn ? 'Crna' : 'Random'}
        </button>
    );
  }
}
export default App;
