const Stack = require('./Stack');

test('Stack is a class', () => {
  expect(typeof Stack.prototype.constructor).toEqual('function');
});

test('stack can add and remove items', () => {
  const s = new Stack();
  s.add(1);
  expect(s.remove()).toEqual(1);
  s.add(2);
  expect(s.remove()).toEqual(2);
});

test('stack can follows first in, last out', () => {
  const s = new Stack();
  s.add(1);
  s.add(2);
  s.add(3);
  expect(s.remove()).toEqual(3);
  expect(s.remove()).toEqual(2);
  expect(s.remove()).toEqual(1);
});

test('peek returns the first element but doesnt remove it', () => {
  const s = new Stack();
  s.add(1);
  s.add(2);
  s.add(3);
  expect(s.peek()).toEqual(3);
  expect(s.remove()).toEqual(3);
  expect(s.peek()).toEqual(2);
  expect(s.remove()).toEqual(2);
  expect(s.peek()).toEqual(1);
  expect(s.remove()).toEqual(1);
});
