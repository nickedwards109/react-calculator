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
        <OperationButton selected={this.props.selected} operation='add' updateOperation={this.updateOperation} />
        <OperationButton selected={this.props.selected} operation='subtract' updateOperation={this.updateOperation} />
        <OperationButton selected={this.props.selected} operation='multiply' updateOperation={this.updateOperation} />
        <OperationButton selected={this.props.selected} operation='divide' updateOperation={this.updateOperation} />
      </div>
    );
  }
}

export default ButtonsContainer;
