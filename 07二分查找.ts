#!/usr/bin/env ts-node

function binarySearch(arr: Array<number>, l: number, r: number, target: number): number {
	if (l > r) {
		return -1
	}
	let mid: number = Math.floor(l + (r - l) / 2)
	if (arr[mid] === target) {
		return mid
	} else {
		if (arr[mid] > target) {
			return binarySearch(arr, l, mid - 1, target)
		} else {
			return binarySearch(arr, mid + 1, r, target)
		}
	}
}

// console.log(binarySearch([1, 2, 3, 4, 5], 0, 5, 7))

function binarySearch2<T>(arr: Array<T>, n: number, target: T) {
	let l = 0,
		r = n - 1 // 在[l, r] 里面寻找target
	while (l < r) {
		// l === r 时， 任然是合法的区间
		// let mid = Math.floor((l + r) / 2) // 可能整形溢出
		let mid = Math.floor(l + (r - l) / 2)
		if (arr[mid] === target) {
			return mid
		} else if (arr[mid] > target) {
			l = mid + 1 
		} else {
			r = mid - 1
		}
	}
	return -1
}

console.log(binarySearch2<number>([1, 2, 3, 4, 5], 5, 3))
