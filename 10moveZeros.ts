/* leetcode 283题 */
var moveZeroes = function (nums: Array<number>) {
	var k = 0
	var i = 0
	for (; i < nums.length; i++) {
		if (nums[i]) {
			nums[k] = nums[i]
			k++
		}
	}
	for (; k < nums.length; k++) {
		nums[k] = 0
	}
}

var arr: Array<number> = [1, 0, 3, 0, 12]
// moveZeroes(arr)
// console.log(arr)

var moveZeroes2 = function (nums: Array<number>) {
	function swap(arr: Array<number>, a: number, b: number) {
		var tmp = arr[a]
		arr[a] = arr[b]
		arr[b] = tmp
	}
	var k: number = 0
	var i: number = 0
	for (; i < nums.length; i++) {
		if (nums[i]) {
			if (k !== i) {
				swap(nums, k, i)
			}
			k++
		}
	}
}
moveZeroes2(arr)
console.log(arr)
