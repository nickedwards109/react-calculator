import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import InputContainer from './InputContainer';

describe('form input component', () => {
	it('calls handleInputChange() when the form is updated', () => {
		const spy = sinon.spy();
		const inputContainer = shallow(<InputContainer handleInputChange={spy} />);
		expect(spy.notCalled).toEqual(true);
		inputContainer.find('input').simulate('change', {target: {value: '42'}});
		expect(spy.calledWith(42)).toEqual(true);
	});
});
