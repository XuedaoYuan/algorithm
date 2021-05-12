/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-11 14:29:08
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-11 15:09:25
 */

/**
 * leetcode 447
 * @param {number[][]} points
 * @return {number}
 */

function dis(point1, point2) {
  return Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2);
}
var numberOfBoomerangs = function (points) {
  let total = 0;
  for (let i = 0, len = points.length; i < len; i++) {
    const recordMap = new Map();
    for (let j = 0, len2 = points.length; j < len2; j++) {
      if (i !== j) {
        const distance = dis(points[i], points[j]);
        console.log(distance);
        const count = recordMap.get(distance);
        if (count) {
          recordMap.set(distance, count + 1);
        } else {
          recordMap.set(distance, 1);
        }
      }
    }
    const values = Array.from(recordMap.values());
    for (let i = 0, len = values.length; i < len; i++) {
      // console.log(values[i]);
      if (values[i] > 1) {
        total += values[i] * (values[i] - 1);
      }
    }
    recordMap.clear()
  }

  return total;
};

console.log(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ])
);
