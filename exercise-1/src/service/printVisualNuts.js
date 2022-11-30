const { integerDivisibleByFive } = require('../useCase/integerDivisibleByFive');
const {
  integerDivisibleByThree,
} = require('../useCase/integerDivisibleByThree');

function decidePrint(number) {
  const byThree = integerDivisibleByThree(number);
  const byFive = integerDivisibleByFive(number);

  if (byThree && byFive) return 'Visual Nuts';
  if (byThree) return 'Visual';
  if (byFive) return 'Nuts';

  return number;
}

module.exports = {
  printVisualNuts: (number) => {
    for (let i = 1; i <= number; i++) {
      console.log(decidePrint(i));
    }
  },
};
