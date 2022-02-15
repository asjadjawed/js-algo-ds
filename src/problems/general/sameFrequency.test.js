const sameFrequency = require('./sameFrequency');

test('test for same frequency', () => {
  expect(sameFrequency(182, 281)).toBeTruthy();
  expect(sameFrequency(34, 14)).toBeFalsy();
  expect(sameFrequency(3589578, 5879385)).toBeTruthy();
  expect(sameFrequency(22, 222)).toBeFalsy();
});
