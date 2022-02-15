const permutation = require('./permutation');

test("permutation for 'hit'", () => {
  console.log = jest.fn();
  permutation('123');

  expect(console.log.mock.calls[0][0]).toBe('123');
  expect(console.log.mock.calls[1][0]).toBe('132');
  expect(console.log.mock.calls[2][0]).toBe('213');
  expect(console.log.mock.calls[3][0]).toBe('231');
  expect(console.log.mock.calls[4][0]).toBe('312');
  expect(console.log.mock.calls[5][0]).toBe('321');
});
