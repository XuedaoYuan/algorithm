/* 
  快速排序===三路快排  解决元素重复比较多的情况
*/

function swap(arr, i, j) {
	const tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}

function partion(arr, l, r) {
	// 选取第一个值作为基准书
	let v = arr[l]
	let lt = l
	let gt = r + 1

	for (let i = l + 1; i < gt; ) {
		if (arr[i] === v) {
			i++
		} else if (arr[i] > v) {
			// 比他大就放到后面
			swap(arr, gt - 1, i)
			gt--
		} else {
			swap(arr, lt + 1, i)
			lt++
			i++
		}
	}
	// 交换第一个元素
	swap(arr, l, lt)
	lt--
	console.log('三路快排后的数组：', arr)
	return { lt, gt }
}

function quickSort(arr, l, r) {
	if (l >= r) {
		return false
	}
	let { lt, gt } = partion(arr, l, r)
	quickSort(arr, l, lt)
	quickSort(arr, gt, r)
}

/* let arr = new Array(20).fill(0)
arr = arr.map((_) => {
	return parseInt(Math.random() * 100)
}) */
let arr = [3, 5, 8, 1, 2, 9, 4, 7, 6]
console.log(arr)
console.time('快排耗时')
quickSort(arr, 0, arr.length - 1)
console.timeEnd('快排耗时')
console.log(arr)

function isSorted(arr) {
	for (let i = 0; i + 2 < arr.length - 1; i++) {
		if ((arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) || (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2])) {
			return false
		}
	}
	return true
}
