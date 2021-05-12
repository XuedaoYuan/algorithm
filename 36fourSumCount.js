/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-11 11:44:36
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-11 11:55:29
 */
/**
 * leetcode 454
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const recordMap = new Map();
  for (let i = 0, len1 = nums1.length; i < len1; i++) {
    for (let j = 0, len2 = nums2.length; j < len2; j++) {
      const sumKey = nums1[i] + nums2[j];
      const val = recordMap.get(sumKey);
      if (val !== undefined) {
        recordMap.set(sumKey, val + 1);
      } else {
        recordMap.set(sumKey, 1);
      }
    }
  }
  let count = 0;
  for (let i = 0, len = nums3.length; i < len; i++) {
    for (let j = 0, len2 = nums4.length; j < len2; j++) {
      const sumKey = nums3[i] + nums4[j];
      const value = recordMap.get(0 - sumKey);
      if (value) {
        count += value;
      }
    }
  }
  return count;
};
console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
