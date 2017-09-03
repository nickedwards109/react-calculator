import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberContainer from './NumberContainer';

class App extends Component {
  render() {
    return (
      <div>
        <NumberContainer number="42" />
      </div>
    );
  }
}

export default App;
