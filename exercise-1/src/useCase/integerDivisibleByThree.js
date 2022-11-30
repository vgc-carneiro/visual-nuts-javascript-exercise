module.exports = {
  integerDivisibleByThree: (number) => {
    if (number == null || number === 0) return false;
    return number % 3 === 0;
  },
};
