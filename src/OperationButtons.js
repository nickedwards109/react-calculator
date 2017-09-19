import React, { Component } from 'react';

class OperationButtons extends Component {
  constructor(props) {
    super(props);
    this.updateOperation = this.updateOperation.bind(this);
  }

  updateOperation(operation) {
    this.props.updateOperation(operation);
  }

  render() {
    return (
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
    );
  }
}

export default OperationButtons;
