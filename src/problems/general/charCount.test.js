const { charCount, maxCharCount } = require('./charCount');

test('Counts characters in a string - Simple', () => {
  expect(charCount('a')).toEqual({ a: 1 });
  expect(charCount('A')).toEqual({ a: 1 });
  expect(charCount('1')).toEqual({ 1: 1 });
});

test('Counts characters in a string - Complex', () => {
  expect(charCount(' ')).toEqual({});
  expect(charCount('A a')).toEqual({ a: 2 });
  expect(charCount('AbC 123')).toEqual({ a: 1, b: 1, c: 1, 1: 1, 2: 1, 3: 1 });
  expect(charCount('12! @BbAa')).toEqual({
    a: 2,
    b: 2,
    1: 1,
    2: 1
  });
  expect(charCount('Hello')).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  expect(charCount('Hi There!')).toEqual({ h: 2, i: 1, t: 1, e: 2, r: 1 });
});

test('Counts characters in a string - Errors', () => {
  expect(() => charCount()).toThrowError('Invalid argument!');
  expect(() => charCount('')).toThrowError('Invalid argument!');
});

test('Max char count', () => {
  expect(maxCharCount()).toBeUndefined();
  expect(maxCharCount('')).toBeUndefined();
  expect(maxCharCount('a')).toBe('a');
  expect(maxCharCount('ab')).toBe('a');
  expect(maxCharCount('abb')).toBe('b');
  expect(maxCharCount('abba')).toBe('b');
  expect(maxCharCount('ccccccc')).toBe('c');
  expect(maxCharCount('Hello There!')).toBe('e');
});
