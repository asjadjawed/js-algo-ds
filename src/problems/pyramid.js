/**
 * Makes a pyramid of height n
 * @param {number} n
 */
const pyramid = (n) => {
  const width = n * 2 - 1;
  if (width < 1) {
    console.log("");
    return;
  }

  for (let i = 1; i <= width; i += 2) {
    const floor = "#".repeat(i);
    const gap = Math.floor(width - floor.length) / 2;
    const step = " ".repeat(gap) + floor + " ".repeat(gap);
    console.log(step);
  }
};

module.exports = {
  pyramid,
};
