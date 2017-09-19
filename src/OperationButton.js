import React, { Component } from 'react';

class OperationButton extends Component {
  constructor(props) {
    super(props);
    this.updateOperation = this.updateOperation.bind(this);
  }

  updateOperation(operation) {
    this.props.updateOperation(this.props.operation);
  }

  render() {
    const operation = this.props.operation

    return (
      <button className={operation} onClick={() => {this.updateOperation(operation)}}>{operation}</button>
    );
  }
}

export default OperationButton;
