const {
  multiples35,
  multiples35Faster
} = require('./0001-multiplesOfThreeFive');

test('sum of multiples of 3 and 5', () => {
  expect(multiples35(10)).toEqual(23);
  expect(multiples35(100)).toEqual(2318);
});

test('sum of multiples of 3 and 5 - Faster', () => {
  expect(multiples35Faster(10)).toBe(23);
  expect(multiples35Faster(100)).toBe(2318);
});
