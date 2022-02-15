const { trap, trapSlow } = require('./trappingRain');

test('get water area, solution 1', () => {
  expect(trapSlow([4, 2, 0, 3, 2, 5])).toEqual(9);
  expect(trapSlow([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
});

test('get water area, solution 2', () => {
  expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9);
  expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
});
