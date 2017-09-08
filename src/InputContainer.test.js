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

	it('calls getInputAsNumber() and returns a number when the form is updated', () => {
		const spy = sinon.spy();
		const inputContainer = shallow(<InputContainer handleInputChange={spy} />);
		expect(spy.notCalled).toEqual(true);

		inputContainer.find('input').simulate('change', {target: {value: '42'}});
		expect(spy.calledWith(42)).toEqual(true);

		inputContainer.find('input').simulate('change', {target: {value: 'asdf'}});
		expect(spy.calledWith(0)).toEqual(true);

		inputContainer.find('input').simulate('change', {target: {value: ''}});
		expect(spy.calledWith(0)).toEqual(true);
	});

	it('renders an error message when string data is input', () => {
		const inputContainer = shallow(<InputContainer />);
		inputContainer.find('input').simulate('change', {target: {value: 'asdf'}});
		expect(inputContainer.find('div').text()).toContain('You can only enter a number.')
	});
});
