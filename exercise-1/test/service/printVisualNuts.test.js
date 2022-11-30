const { printVisualNuts } = require('../../src/service/printVisualNuts');

describe('Check print Visual and Nuts are correct', () => {
  test('Check if console.log were not invoked because of the parameter undefined', () => {
    console.log = jest.fn();
    printVisualNuts(undefined);
    expect(console.log).toHaveBeenCalledTimes(0);
  });
  test('Check if console.log were not invoked because of the parameter null', () => {
    console.log = jest.fn();
    printVisualNuts(null);
    expect(console.log).toHaveBeenCalledTimes(0);
  });

  test('Check if console.log were invoked with the parameter "Visual" at the end.', () => {
    console.log = jest.fn();
    printVisualNuts(3);
    expect(console.log).toHaveBeenLastCalledWith('Visual');
    expect(console.log).toHaveBeenCalledTimes(3);
  });

  test('Check if console.log were invoked with the parameter "Nuts" at the end.', () => {
    console.log = jest.fn();
    printVisualNuts(5);
    expect(console.log).toHaveBeenLastCalledWith('Nuts');
    expect(console.log).toHaveBeenCalledTimes(5);
  });

  test('Check if console.log were invoked with the parameter "Visual Nuts" at the end.', () => {
    console.log = jest.fn();
    printVisualNuts(15);
    expect(console.log).toHaveBeenLastCalledWith('Visual Nuts');
    expect(console.log).toHaveBeenCalledTimes(15);
  });

  test('Check if console.log were invoked with the correct parameter from 1 to 100', () => {
    console.log = jest.fn();
    printVisualNuts(100);
    expect(console.log).toHaveBeenLastCalledWith('Nuts');
    expect(console.log).toHaveBeenCalledTimes(100);
  });
});
