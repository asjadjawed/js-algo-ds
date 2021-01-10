// https://leetcode.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
const trapSlow = (heights) => {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (heights) => {
  let totalWater = 0;
  let left = 0;
  let leftMax = heights[0];
  let right = heights.length - 1;
  let rightMax = heights[heights.length - 1];

  const calculateArea = (x) => {
    return Math.min(leftMax, rightMax) - heights[x];
  };

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, heights[left]);
      const area = calculateArea(left);
      totalWater += area > 0 ? area : 0;
    } else {
      right--;
      rightMax = Math.max(rightMax, heights[right]);
      const area = calculateArea(right);
      totalWater += area > 0 ? area : 0;
    }
  }

  return totalWater;
};

module.exports = { trap, trapSlow };
