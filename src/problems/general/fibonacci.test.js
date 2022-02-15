const { fib, fibRecur } = require('./fibonacci');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
  expect(typeof fibRecur).toEqual('function');
});

test('calculates correct fib value for 0', () => {
  expect(fib(0)).toEqual(0);
  expect(fibRecur(0)).toEqual(0);
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
  expect(fibRecur(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
  expect(fibRecur(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
  expect(fibRecur(2)).toEqual(1);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
  expect(fibRecur(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(fib(39)).toEqual(63245986);
  expect(fibRecur(39)).toEqual(63245986);
});
