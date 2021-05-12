/*
 * @Author: XueDao.Yuan 
 * @Date: 2020-12-03 14:04:51 
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-08 16:47:16
 */
/* 
  leetcode 349
*/

var intersection = function (nums1, nums2) {
	const set = new Set(nums1)
	const resultSet = new Set()
	for (let i = 0, len = nums2.length; i < len; i++) {
		if (set.has(nums2[i])) {
			resultSet.add(nums2[i])
		}
	}
	return Array.from(resultSet)
}



