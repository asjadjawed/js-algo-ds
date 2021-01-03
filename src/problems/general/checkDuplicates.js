function areThereDuplicates(...args) {
  let cache = new Set();

  for (const a of args) {
    if (cache.has(a)) return true;
    cache.add(a);
  }

  return false;
}

const areThereDuplicatesOneLine = (...args) =>
  new Set(args).size !== args.length;

module.exports = { areThereDuplicates, areThereDuplicatesOneLine };
