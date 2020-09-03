class Calculator {
  add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Not a 🤬 Number!');
    }
    return a + b;
  }

  render(value) {
    return `<div>${value}</div>`;
  }
}

module.exports = Calculator;
