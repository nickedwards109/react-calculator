import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { InputContainer } from './InputContainer';

import App from './App';
import ResultContainer from './ResultContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the ResultContainer component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultContainer />, div);
});

describe('rendering props in the UI', () => {
  it('renders a ResultContainer with a number in props which is rendered in the UI', () => {
    const resultContainer = shallow(<ResultContainer number='42' />);
    expect(resultContainer.text()).toContain('42');
  });

  it('renders the ResultContainer as a child within the App component', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<ResultContainer />)).toEqual(true);
  });
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
    console.info(app.find('ResultContainer').get(0));
    expect(app.find('ResultContainer').props()).toEqual({'number': 42});
  });
});
