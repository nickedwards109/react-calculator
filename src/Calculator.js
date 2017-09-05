class Calculator {
  add(...args) {
		const result = args.reduce((sum, value) => {
			return sum + value;
		});
		return result;
	}
}

export default Calculator;
