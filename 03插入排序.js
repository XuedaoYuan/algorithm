/* 
每一步将一个待排序的数据插入到前面已经排好序的有序序列中，直到插完所有元素为止。
*/
let arr = [8, 5, 6, 4, 9]

function sort(arr) {
	let len = arr.length
	let i
	let j
	for (i = 1; i < len; i++) {
		let tmp = arr[i]
		for (j = i - 1; j >= 0 && arr[j] > tmp; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = tmp
	}
	return arr
}

// sort(arr)
// console.log(arr)

function insertSort(arr) {
	if (!arr || arr.length === 1) {
		return arr || []
	}
	let result = []
	result.push(arr[0])
	for (let i = 1; i < arr.length; i++) {
		insertInto(arr[i])
	}

	function insertInto(val) {
		if (val <= result[0]) {
			result.unshift(val)
			return
		}
		if (val >= result[result.length - 1]) {
			result.push(val)
			return
		}
		for (let i = 0, len = result.length; i < len - 1; i++) {
			if (result[i] < val && val < result[i + 1]) {
				result.splice(i + 1, 0, val)
				break
			}
		}
	}
	return result
}

console.log(insertSort(arr))
