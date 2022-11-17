const Calculator = require('./Calculator');

// SUM TEST CASES
describe('Tests for sum', () => {
  it('Sum of 7 and 5 returns 12', () => {
    const calculator = new Calculator();
    expect(calculator.add(7, 5)).toBe(12);
  });

   it('Is a number', () => {
    const calculator = new Calculator();
    expect(calculator.add(10, 5)).toEqual(expect.any(Number));
  }); 

  it('Sum of negatives', () => {
    const calculator = new Calculator();
    expect(calculator.add(-10, -5)).toEqual(expect.any(Number));
  }); 
});

// SUBSTRACT TEST CASES
describe('Tests for substract', () => {
  it('Substract of 5 to 7 returns 2', () => {
    const calculator = new Calculator();
    expect(calculator.substract(7, 5)).toBe(2);
  });

   it('Is a number', () => {
    const calculator = new Calculator();
    expect(calculator.substract(10, 5)).toEqual(expect.any(Number));
  }); 

  it('Substract of negatives', () => {
    const calculator = new Calculator();
    expect(calculator.substract(-10, -5)).toEqual(-5);
  }); 
});

//  DIVIDE TEST CASE
describe('Tests for divisions', () => {
  it('Divide 4 by 2 returns 2', () => {
    const calculator = new Calculator();
    expect(calculator.divide(4, 2)).toBe(2);
  });

   it('Is a number', () => {
    const calculator = new Calculator();
    expect(calculator.divide(10, 5)).toEqual(expect.any(Number));
  }); 

  it('Division by 0', () => {
    const calculator = new Calculator();
    expect(calculator.divide(-10, 0)).toBe('Error division by 0');
  }); 
});
