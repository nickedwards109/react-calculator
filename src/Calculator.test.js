import Calculator from './Calculator'

describe('unit testing a calculator', () => {
  it('adds numbers', () => {
    const calculator = new Calculator();
    const smallSum = calculator.add(21, 21);
    expect(smallSum).toEqual(42);

		const bigSum = calculator.add(10, 25, 1000, 2, 300);
		expect(bigSum).toEqual(1337);
  });

	it('subtracts numbers', () => {
		const calculator = new Calculator();
		const smallDifference = calculator.subtract(43, 1);
		expect(smallDifference).toEqual(42);

		const bigDifference = calculator.subtract(1000, 900, 90, 9);
		expect(bigDifference).toEqual(1);
	});

	it('divides numbers', () => {
		const calculator = new Calculator();
		const quotient = calculator.divide(84, 2);
		expect(quotient).toEqual(42);

		expect(() => { calculator.divide(84, 2, 1, 3) }).toThrow(new Error(
      "You can only supply two numbers to this function."
		));
	});

	it('multiplies numbers', () => {
		const calculator = new Calculator();
		const smallProduct = calculator.multiply(21, 2);
		expect(smallProduct).toEqual(42);

		const bigProduct = calculator.multiply(2, 22, 222, 2222);
		expect(bigProduct).toEqual(21704496);
	});
});
