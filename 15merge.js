/* leetcode 88题 */
var merge = function (nums1, m, nums2, n) {
	for (let i = 0; i < n; i++) {
		var insertNum = nums2[i]
		if (insertNum <= nums1[0]) {
			nums1.unshift(insertNum)
			m++
			break
		}
		if (insertNum >= nums1[m - 1]) {
			nums1[m] = insertNum
			m++
			break
		}
		for (let j = 0; j < m - 1; j++) {
			if (nums1[j] <= insertNum && insertNum < nums1[j + 1]) {
				nums1.splice(j + 1, 0, insertNum)
				break
			}
		}
	}
}
var nums1 = [1, 2, 3, 0, 0, 0],
	m = 3
var nums2 = [2, 5, 6],
	n = 3

/* 利用归并思想可能才是正确的解法， 这里已经分了， 我们只需要合并治即可 */
var merge2 = function (nums1, m, nums2, n) {
	let i = 0
	let j = 0
	let t = 0 // 临时下标
	let temp = []
	while (i < m && j < n) {
		if (nums1[i] <= nums2[j]) {
			temp[t] = nums1[i]
			i++
		} else {
			temp[t] = nums2[j]
			j++
		}
		t++
	}
	while (i < m) {
		temp[t++] = nums1[i++]
	}
	while (j < n) {
		temp[t++] = nums2[j++]
	}
	t = 0
	while (t < nums1.length) {
		nums1[t] = temp[t]
		t++
	}
}
merge2(nums1, 3, nums2, 3)
console.log(nums1)
