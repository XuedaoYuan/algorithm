/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-10 16:02:28
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-10 16:13:27
 */
/* leetcode 1 */
var twoSum = function (nums, target) {
  const record = new Map();
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i];
    if (record.get(target - num) !== undefined) {
      return [record.get(target - num), i];
    } else {
      record.set(num, i);
    }
    // record.set(nums[i], i);
  }
  throw new Error('the input has no solution!');
};

console.log(twoSum([1, 7, 2], 100));
