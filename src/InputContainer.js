import React from 'react';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { typeError: null }
  }

  handleChange(event) {
    const number = this.getInputAsNumber(event.target.value);
    this.props.handleInputChange(parseFloat(number));
  }

  getInputAsNumber(value) {
    if (value.length === 0) { return 0 }
    try {
      const number = parseFloat(value);
      if (isNaN(number)) { throw new Error() }
      else {
        this.setState({ typeError: null });
        return number;
      }
    } catch (event) {
    	this.setState({ typeError: ' You can only enter a number. ' });
      return 0;
    }
  }

  render() {
    return (
      <div>
        {this.props.label}
        <input type="text" onChange={this.handleChange}></input>
        { this.state.typeError }
      </div>
    )
  }
}

export default InputContainer;
