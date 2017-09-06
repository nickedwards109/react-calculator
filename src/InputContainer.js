import React from 'react';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { typeError: null }
  }

  handleChange(event) {
  	try {
  		if (event.target.value.length > 0) {
  			if (isNaN(parseFloat(event.target.value))) { throw new Error() }
  		}
      this.props.handleInputChange(parseFloat(event.target.value));
  		this.setState({ typeError: null })
  	} catch (event) {
  		this.setState({ typeError: ' You can only enter a number. ' })
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
