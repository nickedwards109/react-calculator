import React, { Component } from 'react';
import OperationButton from './OperationButton';

class ButtonsContainer extends Component {
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
        <OperationButton operation='add' updateOperation={this.updateOperation} />
        <OperationButton operation='subtract' updateOperation={this.updateOperation} />
        <OperationButton operation='multiply' updateOperation={this.updateOperation} />
        <OperationButton operation='divide' updateOperation={this.updateOperation} />
      </div>
    );
  }
}

export default ButtonsContainer;
