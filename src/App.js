
import React, { Component } from 'react';
import './App.css';
// import Greet from './Components/Greet'
// import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'

class App extends Component {
  render () {
    return (
      <div className="App">
        <FunctionClick />
        <ClassClick />
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Greet name="Bruce" heroname="batman"/>
        <Greet name = "Bruce"  heroname="superman" />
        <Welcome name="Bruce" heroname="batman"/>
        <Welcome name = "Bruce"  heroname="superman" /> */}

      </div>
    );
  }
}
export default App;
