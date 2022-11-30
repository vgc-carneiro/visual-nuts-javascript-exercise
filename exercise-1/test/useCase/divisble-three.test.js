const {
  integerDivisibleByThree,
} = require('../../src/useCase/integerDivisibleByThree');

describe('Check integer is divisible per 3', () => {
  test('Check if undefined is not divisible per 3', () => {
    expect(integerDivisibleByThree(undefined)).toBeFalsy();
  });

  test('Check if null is not divisible per 3', () => {
    expect(integerDivisibleByThree(null)).toBeFalsy();
  });

  test('Check if 0 is not divisible per 3', () => {
    expect(integerDivisibleByThree(0)).toBeFalsy();
  });

  test('Check if 1 is not divisible per 3', () => {
    expect(integerDivisibleByThree(1)).toBeFalsy();
  });

  test('Check if 3 is divisible per 3', () => {
    expect(integerDivisibleByThree(3)).toBeTruthy();
  });

  test('Check if 5 is not divisible per 3', () => {
    expect(integerDivisibleByThree(5)).toBeFalsy();
  });

  test('Check if 6 is not divisible per 3', () => {
    expect(integerDivisibleByThree(6)).toBeTruthy();
  });
});
