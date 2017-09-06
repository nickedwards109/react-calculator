import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import ResultContainer from './ResultContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('interacting with the calculator', () => {
  it('sets state when handleInputChange() is called from the first input field', () => {
    const app = shallow(<App />);
    const inputContainer1 = app.find('InputContainer').get(0);
    expect(app.state('result')).toEqual(null);
    inputContainer1.props.handleInputChange(42);
    expect(app.state('firstValue')).toEqual(42);
    expect(app.state('result')).toEqual(42);
  });

  it('sets state when handleInputChange() is called from the second input field', () => {
    const app = shallow(<App />);
    const inputContainer2 = app.find('InputContainer').get(1);
    expect(app.state('result')).toEqual(null);
    inputContainer2.props.handleInputChange(42);
    expect(app.state('secondValue')).toEqual(42);
    expect(app.state('result')).toEqual(42);
  });

  it('sets props in the ResultContainer when app state is set', () => {
    const app = shallow(<App />);
    app.setState({ result: 42 });
    expect(app.find('ResultContainer').props()).toEqual({'number': 42});
  });
});
