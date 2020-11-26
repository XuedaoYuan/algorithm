/* leetcode 26题 */
function removeDuplicates(nums) {
	let len = nums.length
	let i = 1,
		k = 0

	while (i < len) {
		if (nums[i] !== nums[i - 1]) {
			let deleteLen = i - k - 1 //  删除个数
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
	if (k !== i && i - k - 1 > 0) {
		nums.splice(k, i - k - 1)
	}
	return nums.length
}
var arr: number[] = [1, 1, 1]
console.log(removeDuplicates(arr))
console.log(arr)
