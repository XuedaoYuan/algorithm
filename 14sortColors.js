/* leetcode 75题 */
/* 
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Follow up:

Could you solve this problem without using the library's sort function?
Could you come up with a one-pass algorithm using only O(1) constant space?
*/
/* 
  计数排序 ---
  或者使用快速排序
*/

var sortColors = function (nums) {
	var count = [0, 0, 0]
	for (var i = 0, len = nums.length; i < len; i++) {
		if (0 <= nums[i] && nums[i] <= 2) count[nums[i]]++
	}
	var index = 0
	for (let i = 0, len = count.length; i < len; i++) {
		for (let j = 0, len = count[i]; j < len; j++) {
			nums[index++] = i
		}
	}
	/* for (let i = 0, len = count[0]; i < len; i++) {
		nums[index++] = 0
	}
	for (let i = 0, len = count[1]; i < len; i++) {
		nums[index++] = 1
	}
	for (let i = 0, len = count[2]; i < len; i++) {
		nums[index++] = 2
	} */
	return nums
}

var sortColors2 = function (nums) {
	function swap(arr, i, j) {
		const tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
	}
	function partion(arr, lt, gt) {
		var i = lt
		var v = 1 //  基准值
		while (i <= gt) {
			if (arr[i] === v) {
				i++
			} else if (arr[i] > v) {
				swap(arr, i, gt)
				gt--
			} else {
				swap(arr, i, lt)
				lt++
				i++
			}
		}
	}
	partion(nums, 0, nums.length - 1)
}
var arr = [2, 0, 2, 1, 1, 0]
sortColors2(arr)
// console.log(arr)

var sortColors3 = function (arr) {
	function swap(arr, i, j) {
		const tmp = arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
	}
	var zero = -1 // [0 ,zero ] == 0
	var two = arr.length // [two, n - 1 ] == 2
	var i = 0
	while (i < two) {
		if (arr[i] === 1) {
			i++
		} else if (arr[i] === 2) {
			/* two-- */
			swap(arr, --two, i)
		} else {
			if (arr[i] !== 0) throw new Error('arr[' + i + '] element is wrong!')
			/* zero++
      swap(arr, zero, i)
      i++ */
			swap(arr, ++zero, i++)
		}
	}
	return arr
}

console.log(sortColors3([0, 2, 1, 1, 2, 0]))
