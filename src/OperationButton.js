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
    let selected  = null;
    if (this.props.selected === this.props.operation) {
      selected = 'selected';
    }

    return (
      /* I got confused for a while when I tried onClick=updateOperation('addition')
            and the function was being self-invoked due to the ().
          My solution is to encapsulate the callback in an anonymous function which
            is not self-invoked. This results in the callback only being invoked
            when the onClick event happens.
      */
      <button className={[operation, selected].join(' ')} onClick={() => {this.updateOperation(operation)}}>{operation}</button>
    );
  }
}

export default OperationButton;
