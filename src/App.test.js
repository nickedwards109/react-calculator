import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

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
  it('renders a component with the number 42 in it', () => {
    const resultContainer = shallow(<ResultContainer number='42' />);
    expect(resultContainer.text()).toContain('42');
  });

  it('renders the ResultContainer as a child within the App component', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<ResultContainer />)).toEqual(true);
  });
});

describe('interacting with the calculator', () => {
  it('renders the result of adding two numbers', () => {
    const app = mount(<App />);
    const addField1 = app.find('input').get(0);
    const addField2 = app.find('input').get(1);
    addField1.value = 20;
    addField2.value = 22;
    app.find('.add-button').simulate('click');
    expect(app.find('ResultContainer').props()).toEqual({ number: 42 });
  });
});
