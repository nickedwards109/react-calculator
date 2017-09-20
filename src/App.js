import React, { Component } from 'react';
import './App.css';
import ResultContainer from './ResultContainer';
import InputContainer from './InputContainer';
import ButtonsContainer from './ButtonsContainer';
import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateFirstValue = this.updateFirstValue.bind(this);
    this.updateSecondValue = this.updateSecondValue.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
    this.calculator = new Calculator();
    this.state = { firstValue: null, secondValue: null, operation: 'add', result: null }
  }

  updateFirstValue(value) {
    const result = this.calculator.add(value, this.state.secondValue);
    this.setState({ firstValue: value, result: result })
  }

  updateSecondValue(value) {
    const result = this.calculator.add(value, this.state.firstValue)
    this.setState({ secondValue: value, result: result })
  }

  updateOperation(operation) {
    this.setState({ operation: operation });
  }

  render() {
    return (
      <div>
        <InputContainer label="First number: " handleInputChange={this.updateFirstValue}/>
        <InputContainer label="Second number: " handleInputChange={this.updateSecondValue}/>
        <ButtonsContainer selected={this.state.operation} updateOperation={this.updateOperation}/>
        <ResultContainer operation={this.state.operation} number={this.state.result}/>
      </div>
    );
  }
}

export default App;
