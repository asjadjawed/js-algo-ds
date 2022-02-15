const {
  reverseString,
  reverseStringRec,
  reverseStringBuiltIn
} = require('./reverseString');

test('To reverse the string', () => {
  expect(reverseString('')).toBe('');
  expect(reverseString('123')).toBe('321');
  expect(reverseString('apple')).toBe('elppa');
});

test('To reverse the string recursively', () => {
  expect(reverseStringRec('')).toBe('');
  expect(reverseStringRec('123')).toBe('321');
  expect(reverseStringRec('apple')).toBe('elppa');
});

test('To reverse the string using built-in JS methods', () => {
  expect(reverseStringBuiltIn('')).toBe('');
  expect(reverseStringBuiltIn('123')).toBe('321');
  expect(reverseStringBuiltIn('apple')).toBe('elppa');
});
