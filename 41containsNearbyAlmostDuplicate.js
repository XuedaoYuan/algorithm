/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-11 16:25:38
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-11 16:31:38
 */

/* 
leetcode 220
Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
*/

/* 
o(n * k)
*/
function isExist(set, num, t) {
  for (let value of set) {
    if (Math.abs(value - num) <= t) {
      return true;
    }
  }
  return false;
}
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const record = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (isExist(record, nums[i], t)) {
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

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 100));
