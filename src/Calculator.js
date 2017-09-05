class Calculator {
  add(...args) {
		const result = args.reduce((sum, value) => {
			return sum + value;
		});
		return result;
	}

	subtract(...args) {
		const result = args.reduce((difference, value) => {
			return difference - value;
		});
		return result;
	}

	divide(numerator, denominator, ...args) {
		if (args.length > 0) {
			throw new Error('You can only supply two numbers to this function.');
		} else {
		  return numerator / denominator;
		}
	}
}

export default Calculator;
