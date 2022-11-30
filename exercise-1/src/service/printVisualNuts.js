const { integerDivisibleByFive } = require('../useCase/integerDivisibleByFive');
const {
  integerDivisibleByThree,
} = require('../useCase/integerDivisibleByThree');

module.exports = {
  printVisualNuts: (number) => {
    for (let i = 1; i <= number; i++) {
      const byThree = integerDivisibleByThree(i);
      const byFive = integerDivisibleByFive(i);

      if (byThree && byFive) {
        console.log('Visual Nuts');
        continue;
      }
      if (byThree) {
        console.log('Visual');
        continue;
      }
      if (byFive) {
        console.log('Nuts');
        continue;
      }

      console.log(i);
    }
  },
};
