module.exports = {
  integerDivisibleByFive: (number) => {
    if (number == null || number === 0) return false;
    return number % 5 === 0;
  },
};
