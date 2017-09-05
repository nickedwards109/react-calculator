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
}

export default Calculator;
