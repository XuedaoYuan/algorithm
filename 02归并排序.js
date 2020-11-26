/* 
归并排序（MERGE-SORT）是利用归并的思想实现的排序方法，
该算法采用经典的分治（divide-and-conquer）策略（分治法将问题分(divide)成一些小的问题然后递归求解，
而治(conquer)的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。
*/

function sort(arr, left, right, temp = []) {
	if (left < right) {
		let mid = parseInt((left + right) / 2)
		sort(arr, left, mid, temp)
		sort(arr, mid + 1, right, temp)
		merge(arr, left, mid, right, temp)
	}
}

function merge(arr, left, mid, right, temp) {
	let i = left // 左序列指针
	let j = mid + 1 // 右序列指针
	let t = 0 //临时数组指针
	while (i <= mid && j <= right) {
		if (arr[i] <= arr[j]) {
			temp[t] = arr[i]
			i++
		} else {
			temp[t] = arr[j]
			j++
		}
		t++
	}
	// 填入左边剩余
	while (i <= mid) {
		temp[t] = arr[i]
		t++
		i++
	}
	// 填入右边剩余
	while (j <= right) {
		temp[t] = arr[j]
		t++
		j++
	}
	t = 0
	while (left <= right) {
		arr[left++] = temp[t++]
	}
}

let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]
sort(arr, 0, arr.length - 1, [])
console.log(arr)

/* 
  另外的实现方式
*/

function sort2(arr) {
	if (arr.length < 2) {
		return arr
	}
	let mid = parseInt(arr.length / 2)
	let left = arr.slice(0, mid)
	let right = arr.slice(mid)
	return merge_sort(sort2(left), sort2(right))
}
function merge_sort(left, right) {
	let result = []
	let i = 0
	let j = 0
	while (i < left.length && j < right.length) {
		if (left[i] <= right[j]) {
			result.push(left[i++])
		} else {
			result.push(right[j++])
		}
	}
	while (i < left.length) {
		result.push(left[i++])
	}
	while (j < right.length) {
		result.push(right[j++])
	}
	return result
}

console.log(sort2([9, 8, 7, 6, 5, 8, 4, 3, 2, 1]))
