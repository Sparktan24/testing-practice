const Calculator = require('./Calculator');

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
