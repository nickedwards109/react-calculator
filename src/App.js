import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResultContainer from './ResultContainer';
import InputContainer from './InputContainer';
import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateFirstValue = this.updateFirstValue.bind(this);
    this.updateSecondValue = this.updateSecondValue.bind(this);
    this.calculator = new Calculator();
    this.state = { firstValue: null, secondValue: null, result: null }
  }

  updateFirstValue(value) {
    const result = this.calculator.add(value, this.state.secondValue);
    this.setState({ firstValue: value, result: result })
  }

  updateSecondValue(value) {
    const result = this.calculator.add(value, this.state.firstValue)
    this.setState({ secondValue: value, result: result })
  }

  render() {
    return (
      <div>
        <InputContainer label="First number: " handleInputChange={this.updateFirstValue}/>
        <InputContainer label="Second number: " handleInputChange={this.updateSecondValue}/>
        <ResultContainer number={this.state.result}/>
      </div>
    );
  }
}

export default App;
