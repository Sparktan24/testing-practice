module.exports = class Calculator {
  add(a, b) {
    return a + b;
  }

  substract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return b === 0 ? 'Error division by 0' : a / b;
  }
}

/* const calculator = new Calculator();
console.log(calculator.add(5, 7)); */