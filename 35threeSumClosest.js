/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-11 10:55:25
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-11 11:15:44
 */
/**
 * leetcode 16
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result,
    minDelta = undefined;
  nums.sort(function (a, b) {
    return a - b;
  });
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right && left !== i && right !== i) {
      let threeSum = nums[i] + nums[left] + nums[right];
      if (threeSum === target) {
        result = [nums[i], nums[left], nums[right]];
        return result;
      }

      const delta = threeSum - target;
      if (delta > 0) {
        right--;
      } else {
        left++;
      }
      if (minDelta !== undefined) {
        if (Math.abs(delta) < minDelta) {
          result = [nums[i], nums[left], nums[right]];
        }
      } else {
        minDelta = Math.abs(delta);
        result = [nums[i], nums[left], nums[right]];
      }
      left++;
    }
    while (i < len - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
// -4 -1 1 2
