const Queue = require('./Queue');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue and check peek', () => {
  const q = new Queue();
  expect(() => {
    q.add(1);
  }).not.toThrow();
  expect(q.peek()).toBe(1);
});

test('Queue Ops and State', () => {
  const q = new Queue();
  q.add(1);
  expect(q.remove(1)).toBe(1);
});

test('Order of elements is maintained', () => {
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.peek();
  q.add(3);
  expect(q.remove()).toEqual(1);
  expect(q.remove()).toEqual(2);
  expect(q.remove()).toEqual(3);
  expect(q.remove()).toEqual(undefined);
});
