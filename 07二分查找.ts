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

console.log(binarySearch([1, 2, 3, 4, 5], 0, 5, 7))
