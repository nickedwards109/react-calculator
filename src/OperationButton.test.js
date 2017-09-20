import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import OperationButton from './OperationButton';

it('calls updateOperation() when the button is clicked', () => {
  const spy = sinon.spy();
  const button = shallow(<OperationButton updateOperation={spy} operation='add'/>);
  expect(spy.notCalled).toEqual(true);
  button.find('button').simulate('click');
  expect(spy.calledWith('add')).toEqual(true);
});
