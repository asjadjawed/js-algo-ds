const Queue = require('./Queue.v2');

test('Queue is a class', () => {
  expect(typeof Queue.prototype.constructor).toEqual('function');
});

test('can add elements to a queue and check peek', () => {
  const q = new Queue();
  expect(() => {
    q.enqueue(1);
  }).not.toThrow();
  expect(q.peek()).toBe(1);
});

test('Queue Ops and State', () => {
  const q = new Queue();
  q.enqueue(1);
  expect(q.dequeue(1)).toBe(1);
});

test('Order of elements is maintained', () => {
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  expect(q.peek()).toEqual(1);
  q.enqueue(3);
  expect(q.dequeue()).toEqual(1);
  expect(q.dequeue()).toEqual(2);
  expect(q.dequeue()).toEqual(3);
  expect(q.dequeue()).toBe(null);
});
