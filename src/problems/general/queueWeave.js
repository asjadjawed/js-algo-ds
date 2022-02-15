const Queue = require('../../datastructures/queue/Queue');

/**
 * Weaves 2 queues
 *
 * @param {Queue} sourceOne
 * @param {Queue} sourceTwo
 */
const weave = (sourceOne, sourceTwo) => {
  const weavedQueue = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) weavedQueue.add(sourceOne.remove());
    if (sourceTwo.peek()) weavedQueue.add(sourceTwo.remove());
  }

  return weavedQueue;
};

module.exports = { weave };
