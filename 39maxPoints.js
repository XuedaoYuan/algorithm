/**
 * @param {number[][]} points
 * @return {number}
 */
function coefficient(p1, p2) {
  return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}
var maxPoints = function (points) {
  const len = points.length;
  let maxCount = 1;
  for (let i = 0; i < len; i++) {
    const recordMap = new Map();

    for (let j = 0; j < len; j++) {
      if (i !== j) {
        const coe = coefficient(points[i], points[j]);
        const value = recordMap.get(coe);
        if (value) {
          recordMap.set(coe, value + 1);
        } else {
          recordMap.set(coe, 2);
        }
      }
    }
    let max = Math.max.apply(null, [...recordMap.values()]);
    if (max > maxCount) {
      maxCount = max;
    }
    recordMap.clear();
  }
  return maxCount;
};

console.log(
  maxPoints([
    [1, 1],
    [3, 2],
    [5, 3],
    [4, 1],
    [2, 3],
    [1, 4]
  ])
);
