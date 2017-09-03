import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import NumberContainer from './NumberContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the NumberContainer component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NumberContainer />, div);
});

describe('rendering props in the UI', () => {
  it('renders a component with the number 42 in it', () => {
    const numberContainer = shallow(<NumberContainer number='42' />);
    expect(numberContainer.text()).toContain('42');
  });

  it('renders the NumberContainer as a child within the App component', () => {
    const app = shallow(<App />);
    expect(app.containsMatchingElement(<NumberContainer />)).toEqual(true);
  })
});
