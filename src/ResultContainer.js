import React from 'react';

class ResultContainer extends React.Component {
  render() {
    let message = '';
    switch (this.props.operation) {
      default:
        message = 'The sum is';
        break;
      case 'add':
        message = 'The sum is';
        break;
      case 'subtract':
        message = 'The difference is';
        break;
      case 'multiply':
        message = 'The product is';
        break;
      case 'divide':
        message = 'The quotient is';
    }
    return <h3>{message} {this.props.number}</h3>
  }
}

export default ResultContainer;
