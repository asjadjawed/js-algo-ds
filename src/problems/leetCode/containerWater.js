// https://leetcode.com/problems/container-with-most-water/

const maxArea = (height) => {
  if (height.length <= 1) return null;
  const getArea = (i, j) => {
    const b = j - i; // breadth
    const h = Math.min(height[j], height[i]); // height
    return b * h;
  };

  // starting at max width i.e. start, end
  let s = 0;
  let e = height.length - 1;
  let maxArea = getArea(s, e);

  while (s < e) {
    const area = getArea(s, e);
    maxArea = Math.max(area, maxArea);

    // the smaller wall changes
    if (height[s] < height[e]) s++;
    else e--;
  }

  return maxArea;
};

module.exports = maxArea;
