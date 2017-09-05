import Calculator from './Calculator'

describe('unit testing a calculator', () => {
  it('adds two numbers', () => {
    const calculator = new Calculator();
    const sum = calculator.add(21, 21);
    expect(sum).toEqual(42);
  });
});
