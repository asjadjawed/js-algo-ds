function areThereDuplicates(...args) {
  let cache = new Set();

  for (const a of args) {
    if (cache.has(a)) return true;
    cache.add(a);
  }

  return false;
}

module.exports = areThereDuplicates;
