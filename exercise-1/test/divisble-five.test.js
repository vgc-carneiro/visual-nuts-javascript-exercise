const {
  integerDivisibleByFive,
} = require('../src/useCase/integerDivisibleByFive');

describe('Check integer is divisible per 5', () => {
  test('Check if null is not divisible per 5', () => {
    expect(integerDivisibleByFive(null)).toBeFalsy();
  });

  test('Check if 0 is not divisible per 5', () => {
    expect(integerDivisibleByFive(0)).toBeFalsy();
  });

  test('Check if 1 is not divisible per 5', () => {
    expect(integerDivisibleByFive(1)).toBeFalsy();
  });

  test('Check if 5 is divisible per 5', () => {
    expect(integerDivisibleByFive(5)).toBeTruthy();
  });

  test('Check if 6 is not divisible per 3', () => {
    expect(integerDivisibleByFive(6)).toBeFalsy();
  });

  test('Check if 10 is divisible per 5', () => {
    expect(integerDivisibleByFive(10)).toBeTruthy();
  });
});
