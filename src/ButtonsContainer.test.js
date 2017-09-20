import React from 'react';
import { mount } from 'enzyme';
import ButtonsContainer from './ButtonsContainer';

it('sets props in a button when the ButtonsContainer props are set', () => {
  const buttonsContainer = mount(<ButtonsContainer selected='add'/>);
  const button = buttonsContainer.find('OperationButton').get(0);
  expect(button.props.selected).toEqual('add');
});
