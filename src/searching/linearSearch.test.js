const { linearSearch } = require('./linearSearch');

test('linear search', () => {
  expect(linearSearch([], 10)).toBe(-1);
  expect(linearSearch([10], 10)).toBe(0);
  expect(linearSearch([1, 2, 3, 4, 5, 6], 10)).toBe(-1);
  expect(linearSearch([1, 2, 3, 4, 5, 6], 3)).toBe(2);
  expect(linearSearch([34, 56, 1, 2], 1)).toBe(2);
});
