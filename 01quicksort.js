function quickSort(arr) {
	if (arr.length <= 1) return arr
	// 获取基准值， 比如获取中间值
	// var pivotIndex = Math.floor(arr.length / 2)
	var pivotIndex = 0
	// 获取中间值
	var pivot = arr.splice(pivotIndex, 1)[0]
	var left = []
	var right = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([6, 5, 4, 3, 1, 2, 9, 10, 12]))
