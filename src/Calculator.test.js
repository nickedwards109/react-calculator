import Calculator from './Calculator'

describe('unit testing a calculator', () => {
  it('adds numbers', () => {
    const calculator = new Calculator();
    const smallSum = calculator.add(21, 21);
    expect(smallSum).toEqual(42);

		const bigSum = calculator.add(10, 25, 1000, 2, 300);
		expect(bigSum).toEqual(1337);
  });
});
