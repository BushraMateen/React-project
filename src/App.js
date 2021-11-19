
import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Greet name="Bushra"/>
        <Greet name = "Mateen "/>
      </div>
    );
  }
}
export default App;
