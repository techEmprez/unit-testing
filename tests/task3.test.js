const calculator = require('../task3');

describe(' simple calculator class, which  have 4 methods: add, subtract, divide, and multiply', () => {

  describe('add method tests', () => {
    test('should pass test1', () => {
      expect(calculator.add(2, 3)).toBe(5);
    })
    test('should pass test2', () => {
      expect(calculator.add(4, 5)).toBe(9);
    })
    test('should pass test3', () => {
      expect(calculator.add(6, 7)).toBe(13);
    })
  });

  describe('substract method tests', () => {
    test('should pass test1', () => {
      expect(calculator.substract(2, 3)).toBe(-1);
    })
    test('should pass test2', () => {
      expect(calculator.substract(14, 5)).toBe(9);
    })
    test('should pass test3', () => {
      expect(calculator.substract(63, 7)).toBe(56);
    })
  });

  describe('multiply method tests', () => {
    test('should pass test1', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    })
    test('should pass test2', () => {
      expect(calculator.multiply(4, 5)).toBe(20);
    })
    test('should pass test3', () => {
      expect(calculator.multiply(6, 6)).toBe(36);
    })
  });

  describe('devide method tests', () => {
    test('should pass test1', () => {
      expect(calculator.devide(3, 2)).toBe(1.5);
    })
    test('should pass test2', () => {
      expect(calculator.devide(40, 5)).toBe(8);
    })
    test('should pass test3', () => {
      expect(calculator.devide(10, 10)).toBe(1);
    })
  });

});