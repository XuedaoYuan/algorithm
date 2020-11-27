/* 
  leetcode 11 题
*/
var maxArea = function (height) {
	let left = 0
	let right = height.length - 1
	let result = 0
	while (left < right) {
		result = Math.max(result, Math.min(height[left], height[right]) * (right - left))
		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}
	return result
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
console.log(maxArea([1, 1]))
console.log(maxArea([4, 3, 2, 1, 4]))
