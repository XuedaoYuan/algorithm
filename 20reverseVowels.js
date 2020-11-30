/* LeetCode 345题  反转元音字母*/
var reverseVowels = function (s) {
	if (!s) {
		return ''
	}
	let sArr = s.split('')
	let i = 0
	let j = sArr.length - 1
	while (i < j) {
		if (!isVowel(sArr[i])) {
			i++
			continue
		}
		if (!isVowel(sArr[j])) {
			j--
			continue
		}
		swap(sArr, i, j)
		i++
		j--
	}
	return sArr.join('')
}

function isVowel(char) {
	char = char.toLowerCase()
	switch (char) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			return true
		default:
			return false
	}
}
function swap(arr, i, j) {
	let tmp = arr[i]
	arr[i] = arr[j]
	arr[j] = tmp
}

console.log(reverseVowels('Aa'))
