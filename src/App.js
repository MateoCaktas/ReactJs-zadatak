import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NameForm } from './komponente/MyNameForm';
import { MyComponent } from './komponente/MyComponent';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: 'Crna'
    }
  }

  onChangeText(newText) {
    this.setState({
      value: newText
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MyComponent 
          vrijednost = {this.state.value}
          />
          <NameForm
          mijenjajTekst = {this.onChangeText.bind(this)}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
