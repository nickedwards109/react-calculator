import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import ResultContainer from './ResultContainer';

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
