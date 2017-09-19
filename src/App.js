import React, { Component } from 'react';
import './App.css';
import ResultContainer from './ResultContainer';
import InputContainer from './InputContainer';
import Calculator from './Calculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.updateFirstValue = this.updateFirstValue.bind(this);
    this.updateSecondValue = this.updateSecondValue.bind(this);
    this.updateOperation = this.updateOperation.bind(this);
    this.calculator = new Calculator();
    this.state = { firstValue: null, secondValue: null, operation: 'addition', result: null }
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
        <div>
          {/* I got confused for a while when I tried onClick=updateOperation('addition')
                and the function was being self-invoked due to the ().
              My solution is to encapsulate the callback in an anonymous function which
                is not self-invoked. This results in the callback only being invoked
                when the onClick event happens.
          */}
          <button className='add' onClick={() => {this.updateOperation('addition')}}>Add</button>
          <button className='subtract' onClick={() => {this.updateOperation('subtraction')}}>Subtract</button>
          <button className='multiply' onClick={() => {this.updateOperation('multiplication')}}>Multiply</button>
          <button className='divide' onClick={() => {this.updateOperation('division')}}>Divide</button>
        </div>
        <ResultContainer number={this.state.result}/>
      </div>
    );
  }
}

export default App;
