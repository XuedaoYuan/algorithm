/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/* 
leetcode 350
*/
var intersect = function (nums1, nums2) {
  const recordMap = new Map();
  for (let i = 0, len = nums1.length; i < len; i++) {
    const key = nums1[i];
    if (recordMap.has(key)) {
      const value = recordMap.get(key);
      recordMap.set(key, value + 1);
    } else {
      recordMap.set(key, 1);
    }
  }
  const result = [];
  for (let i = 0, len = nums2.length; i < len; i++) {
    const key = nums2[i];
    if (recordMap.get(key) > 0) {
      result.push(key);
      const value = recordMap.get(key);
      recordMap.set(key, value - 1);
    }
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));


