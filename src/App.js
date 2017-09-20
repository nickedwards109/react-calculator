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
    this.state = { firstValue: null, secondValue: null, operation: 'add', result: 0 }
  }

  updateFirstValue(value) {
    const result = this.calculate(value, this.state.secondValue, this.state.operation);
    this.setState({ firstValue: value, result: result });
  }

  updateSecondValue(value) {
    const result = this.calculate(this.state.firstValue, value, this.state.operation);
    this.setState({ secondValue: value, result: result });
  }

  updateOperation(operation) {
    const result = this.calculate(this.state.firstValue, this.state.secondValue, operation);
    this.setState({ operation: operation, result: result });
  }

  calculate(value1, value2, operation) {
    let result = 0;
    switch (operation) {
      case 'add':
        result = this.calculator.add(value1, value2);
        break;
      case 'subtract':
        result = this.calculator.subtract(value1, value2);
        break;
      case 'multiply':
        result = this.calculator.multiply(value1, value2);
        break;
      case 'divide':
        result = this.calculator.divide(value1, value2);
        break;
      default:
        result = this.calculator.add(value1, value2);
        break;
    }
    return result;
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
