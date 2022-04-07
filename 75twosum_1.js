/*
 * @Author: XueDao.Yuan 
 * @Date: 2022-04-07 11:22:05 
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2022-04-07 11:22:37
 */

var twoSum = function (nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
