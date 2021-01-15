// https://adventofcode.com/2015/day/2

const { readFileSync } = require("fs");

/**
 * @param {Number[]} dimensions
 */
const getArea = (dimensions) => {
  dimensions = dimensions.sort((a, b) => a - b);
  const extra = dimensions[0] * dimensions[1];
  const [l, h, w] = dimensions;
  const area = 2 * l * h + 2 * l * w + 2 * h * w;
  return area + extra;
};

const getRibbon = (dimensions) => {
  dimensions = dimensions.sort((a, b) => a - b);
  const lengthOfRibbon = 2 * dimensions[0] + 2 * dimensions[1];
  const [l, h, w] = dimensions;
  const bow = l * h * w;
  return lengthOfRibbon + bow;
};

const totals = (file = "./wrappingPaper.data.txt", f) => {
  const data = readFileSync(file);
  let dimensions = data
    .toString()
    .split("\n")
    .map((d) => d.split("x"));

  let totalPaper = 0;
  for (const d of dimensions) totalPaper += f(d);
  return totalPaper;
};

module.exports = { getArea, totals, getRibbon };
