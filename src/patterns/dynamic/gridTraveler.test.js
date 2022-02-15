const gridTraveler = require('./gridTraveler');

test('No of ways to travel down or right in a grid', () => {
  expect(gridTraveler(1, 1)).toBe(1);
  expect(gridTraveler(2, 3)).toBe(3);
  expect(gridTraveler(3, 2)).toBe(3);
  expect(gridTraveler(3, 3)).toBe(6);
  expect(gridTraveler(18, 18)).toBe(2333606220);
});
