import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
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
    app.setState({ operation: 'add', result: 42 });
    const results = app.find('ResultContainer');
    expect(results.props().number).toEqual(42);
    expect(results.props().operation).toEqual('add');
  });

  it('sets props in the ButtonsContainer when app state is set', () => {
    const app = shallow(<App />);
    app.setState({ operation: 'add' });
    const buttons = app.find('ButtonsContainer');
    expect(buttons.props().selected).toEqual('add');
  });

  it('starts at a default operation state of addition', () => {
    const app = shallow(<App />);
    expect(app.state('operation')).toEqual('add');
  });

  it('sets the operation state when an operation button is clicked', () => {
    const app = mount(<App />);

    const subtractButton = app.find('.subtract');
    subtractButton.simulate('click');
    expect(app.state('operation')).toEqual('subtract');

    const addButton = app.find('.add');
    addButton.simulate('click');
    expect(app.state('operation')).toEqual('add');

    const multiplyButton = app.find('.multiply');
    multiplyButton.simulate('click');
    expect(app.state('operation')).toEqual('multiply');

    const divideButton = app.find('.divide');
    divideButton.simulate('click');
    expect(app.state('operation')).toEqual('divide');
  });

  it('sets a CSS class of selected to a button that is clicked, and only that button', () => {
    const app = mount(<App />);
    const addButton = app.find('.add');
    const subtractButton = app.find('.subtract');
    const multiplyButton = app.find('.multiply');
    const divideButton = app.find('.divide');

    // By default, the Add button should be selected
    expect(addButton.hasClass('selected')).toEqual(true);
    expect(subtractButton.hasClass('selected')).toEqual(false);
    expect(multiplyButton.hasClass('selected')).toEqual(false);
    expect(divideButton.hasClass('selected')).toEqual(false);

    addButton.simulate('click');
    expect(addButton.hasClass('selected')).toEqual(true);
    expect(subtractButton.hasClass('selected')).toEqual(false);
    expect(multiplyButton.hasClass('selected')).toEqual(false);
    expect(divideButton.hasClass('selected')).toEqual(false);

    subtractButton.simulate('click');
    expect(subtractButton.hasClass('selected')).toEqual(true);
    expect(addButton.hasClass('selected')).toEqual(false);
    expect(multiplyButton.hasClass('selected')).toEqual(false);
    expect(divideButton.hasClass('selected')).toEqual(false);

    multiplyButton.simulate('click');
    expect(multiplyButton.hasClass('selected')).toEqual(true);
    expect(addButton.hasClass('selected')).toEqual(false);
    expect(subtractButton.hasClass('selected')).toEqual(false);
    expect(divideButton.hasClass('selected')).toEqual(false);

    divideButton.simulate('click');
    expect(divideButton.hasClass('selected')).toEqual(true);
    expect(addButton.hasClass('selected')).toEqual(false);
    expect(subtractButton.hasClass('selected')).toEqual(false);
    expect(multiplyButton.hasClass('selected')).toEqual(false);
  });

  it('displays a specific message for each math operation', () => {
    const app = mount(<App />);
    const addButton = app.find('.add');
    const subtractButton = app.find('.subtract');
    const multiplyButton = app.find('.multiply');
    const divideButton = app.find('.divide');

    //  By default, addition should be selected
    const results = app.find('ResultContainer');
    expect(results.text()).toContain('The sum is');

    addButton.simulate('click');
    expect(results.text()).toContain('The sum is');

    subtractButton.simulate('click');
    expect(results.text()).toContain('The difference is');

    multiplyButton.simulate('click');
    expect(results.text()).toContain('The product is');

    divideButton.simulate('click');
    expect(results.text()).toContain('The quotient is');
  });

  it('does the proper math operation depending on which button is selected', () => {
    const app = mount(<App />);
    const addButton = app.find('.add');
    const subtractButton = app.find('.subtract');
    const multiplyButton = app.find('.multiply');
    const divideButton = app.find('.divide');
    const inputContainer1 = app.find('InputContainer').get(0);
    const inputContainer2 = app.find('InputContainer').get(1);
    const results = app.find('ResultContainer');

    addButton.simulate('click');
    inputContainer1.props.handleInputChange(100);
    inputContainer2.props.handleInputChange(5);
    expect(results.text()).toContain('105');

    subtractButton.simulate('click');
    inputContainer1.props.handleInputChange(100);
    inputContainer2.props.handleInputChange(5);
    expect(results.text()).toContain('95');

    multiplyButton.simulate('click');
    inputContainer1.props.handleInputChange(100);
    inputContainer2.props.handleInputChange(5);
    expect(results.text()).toContain('500');
    
    divideButton.simulate('click');
    inputContainer1.props.handleInputChange(100);
    inputContainer2.props.handleInputChange(5);
    expect(results.text()).toContain('20');
  });
});
