/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-10 16:18:29
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-11 10:41:01
 */

/**
 * leetcode 15
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  });
  const result = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len - 1;
    const target = nums[i];

    while (left < right && left !== i && right !== i) {
      //   console.log(left, right);
      let threeSum = nums[i] + nums[left] + nums[right];
      if (threeSum === 0 && left < right) {
        const temp = [target, nums[left], nums[right]];

        result.push(temp);
        // left++;
        // right--;
        while (nums[left] === temp[1] && left < right) {
          left++;
        }
        while (nums[right] === temp[2] && left < right) {
          right--;
        }
      }
      if (threeSum < 0) {
        left++;
      }
      if (threeSum > 0) {
        right--;
      }
    }
    while (i < len - 1 && nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result;
};

console.log(threeSum([0, 3, 0, 1, 1, -1, -5, -5, 3, -3, -3, 0]));
