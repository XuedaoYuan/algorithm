/* leetcode 80题 */
function removeDuplicates(nums) {
	let len = nums.length
	let i = 1,
		k = 0

	while (i < len) {
		if (nums[i] !== nums[i - 1]) {
			let deleteLen = i - k - 2 //  删除个数
			if (deleteLen > 0) {
				nums.splice(k, deleteLen)
				len = len - deleteLen
				i = i - deleteLen
				k = i
			} else {
				k = i
				i++
			}
		} else {
			i++
		}
	}
	// 删除最后相等的元素
	if (k !== i && i - k - 2 > 0) {
		nums.splice(k, i - k - 2)
	}
	return nums.length
}
var arr = [0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3]
console.log(removeDuplicates(arr))
console.log(arr)
