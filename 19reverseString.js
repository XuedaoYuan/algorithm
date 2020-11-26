/* 
 leetcode 344 字符串数组反转
*/

var reverseString = function (s) {
	if (!s) {
		return ''
	}
	return s.reverse()
}

var reverseString2 = function (s) {
	let i = 0
	let j = s.length - 1
	while (i < j) {
		swap(s, i, j)
		i++
		j--
	}
	return s
}

function swap(arr, i, j) {
	let tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}
console.log(reverseString2(['h', 'e', 'l', 'l', 'o']))
