/* 
leetcode 167题
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
*/

/* 
  对撞指针 思路
*/
var twoSum2 = function (numbers: number[], target: number) {
	let i = 0
	let j = numbers.length - 1
	while (i < j) {
		if (numbers[i] + numbers[j] === target) {
			return [i + 1, j + 1]
		} else if (numbers[i] + numbers[j] > target) {
			j--
		} else {
			i++
		}
	}
	throw new Error('the input is has no solution.')
}

var twoSum = function (numbers: number[], target: number) {
	for (let i = 0; i < numbers.length; i++) {
		let curr = numbers[i]
		let result = binarySearch(numbers, curr, i + 1, numbers.length - 1, target)
		if (result > -1) {
			return [i + 1, result + 1]
		}
	}
}

function binarySearch(arr: Array<number>, curr: number, l: number, r: number, target: number) {
	// 在[l, r] 里面寻找target === curr + arr[i]
	while (l <= r) {
		// l === r 时， 任然是合法的区间
		// let mid = Math.floor((l + r) / 2) // 可能整形溢出
		let mid = Math.floor(l + (r - l) / 2)
		console.log('mid', mid)
		if (arr[mid] + curr === target) {
			return mid
		} else if (arr[mid] + curr > target) {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}
	return -1
}

console.log(twoSum2([2, 5, 7, 11], 7))
