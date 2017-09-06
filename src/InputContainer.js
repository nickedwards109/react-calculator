import React from 'react';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleInputChange(parseFloat(event.target.value))
  }

  render() {
    return (
      <div>
        {this.props.label}
        <input type="text" onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default InputContainer;
