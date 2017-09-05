import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultContainer from './ResultContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ResultContainer number="42" />
      </div>
    );
  }
}

export default App;
