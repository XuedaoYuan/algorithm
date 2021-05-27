/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-11 15:54:45
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-12 09:37:42
 */
/**
 * leetcode 219
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 *
 * Given an integer array nums and an integer k,
 * return true if there are two distinct indices i and j in the array
 * such that nums[i] == nums[j] and abs(i - j) <= k.
 */
var containsNearbyDuplicate = function (nums, k) {
  const record = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (record.has(nums[i])) {
      return true;
    } else {
      record.add(nums[i]);
    }
    if (record.size === k + 1) {
      record.delete(nums[i - k]);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
