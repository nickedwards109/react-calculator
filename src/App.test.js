import React from 'react';
import ReactDOM from 'react-dom';
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
