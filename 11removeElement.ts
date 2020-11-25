/* leetcode 27题 */
function removeElement(nums: number[], val: number): number {
	let len = nums.length
	for (let i = 0; i < len; ) {
		if (nums[i] === val) {
			nums.splice(i, 1)
			len--
		} else {
			i++
		}
	}
	console.log(nums)
	return nums.length
}

console.log(removeElement([2, 3, 3, 2, 3, 4, 33, 3, 3, 3, 3], 3))
