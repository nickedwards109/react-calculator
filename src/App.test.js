import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';

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

  it('sets the operation state when an operation button is clicked', () => {
    const app = shallow(<App />);
    expect(app.state('operation')).toEqual(null);

    const addButton = app.find('.add');
    ReactTestUtils.Simulate.click(addButton);
    expect(app.state('operation')).toEqual('addition');

    const subtractButton = app.find('.subtract');
    ReactTestUtils.Simulate.click(subtractButton);
    expect(app.state('operation')).toEqual('subtraction');

    const multiplyButton = app.find('.multiply');
    ReactTestUtils.Simulate.click(multiplyButton);
    expect(app.state('operation')).toEqual('multiplication');

    const divideButton = app.find('.divide');
    ReactTestUtils.Simulate.click(divideButton);
    expect(app.state('operation')).toEqual('division');
  });
});
