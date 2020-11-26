/* leetcode 215题  */
/* 
  在一个无序的数组中寻找第K大的元素， 利用快速排序将pivot放在争取的位置上来解决
*/

function swap(arr, i, j) {
	const tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}

function partition(arr, left, right) {
	// 选取基准值
	var datum = arr[Math.floor(Math.random() * (right - left)) + left]
	// datum = arr[Math.floor(left + (right - left) / 2)]
	let i = left
	let j = right
	while (i < j) {
		while (datum > arr[i]) {
			i++
		}
		while (arr[j] > datum) {
			j--
		}
		if (i < j) {
			swap(arr, i, j)
		}
		// 如果存在相等数据，可能死循环
		if (arr[i] === arr[j] && i !== j) {
			i++
		}
	}
	return i
}

function quick(arr, left, right, k) {
	let index
	if (left < right) {
		index = partition(arr, 0, arr.length - 1)
		console.log(index)
		if (arr.length - index === k) {
			return arr[index]
		} else if (arr.length - index < k) {
			// 说明top k在左边
			return quick(arr, left, index - 1, k)
		} else {
			return quick(arr, index + 1, right, k)
		}
	}
}

var findKthLargest = function (nums, k) {
  if(nums.length === 1){
    return nums[0]
  }
	return quick(nums, 0, nums.length - 1, k)
}

var nums = [1, 2]

console.log(findKthLargest(nums, 2))
