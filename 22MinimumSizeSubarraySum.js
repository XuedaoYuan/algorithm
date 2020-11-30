/* 
  leetcode 209 题
  寻找和大于等于s的连续最短子数组
  Input: s = 7, nums = [2,3,1,2,4,3]
  Output: 2
  Explanation: the subarray [4,3] has the minimal length under the problem constraint.
  可以采用滑动窗口的思想， 也是双索引技术的一种
*/
var minSubArrayLen = function (s, nums) {
	var i = 0
	var j = 0
	var sum = nums[0]
	var minLen = nums.length + 1
	while (i <= nums.length - 1) {
		if (sum >= s) {
			minLen = Math.min(minLen, Math.abs(j - i) + 1)
			sum = sum - nums[i]
			i++
		} else {
			j++
			sum = sum + nums[j]
		}
	}
	return minLen
}

var nums = [2, 3, 1, 2, 4, 3]
// console.log(minSubArrayLen(9, nums))

var minSubArrayLen2 = function (s, nums) {
	var l = 0
	var r = -1
	var sum = 0
	var minLen = nums.length + 1
	while (l < nums.length) {
		if (r < nums.length && sum < s) {
			r++
			sum += nums[r]
		} else {
			sum -= nums[l]
			l++
		}
		if (sum >= s) {
			minLen = Math.min(minLen, r - l + 1)
		}
	}
	if (minLen === nums.length + 1) {
		return 0
	}
	return minLen
}

console.log(minSubArrayLen2(4, nums))
