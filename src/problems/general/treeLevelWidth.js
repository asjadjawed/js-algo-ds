const levelWidth = (node) => {
  const L = 'L';
  const counter = [1, 0];
  let q = [...node.children, L];

  while (!(q.length === 1 && q[0] === L)) {
    if (q[0] !== L) {
      const current = q.shift();
      ++counter[counter.length - 1];
      q = [...q, ...current.children];
    }

    if (q[0] === L && q.length > 1) {
      q.push(q.shift());
      counter.push(0);
    }
  }

  return counter;
};

module.exports = levelWidth;
