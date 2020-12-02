/* 
  leetcode  438 
  从s中找出p的子串， 返回子串开头的所有起始位置 值考虑小写
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
	var sLength = s.length
	var pLength = p.length
	var freq = new Array(26).fill(0)
	var aCode = 'a'.charCodeAt()
	for (let i = 0; i < pLength; i++) {
		freq[p[i].charCodeAt() - aCode]++
	}
	var left = 0
	var right = 0
	var result = []
	var tempFreq = new Array(26).fill(0)
	while (right < sLength) {
		const curRight = s[right].charCodeAt() - aCode
		tempFreq[curRight]++
		right++
		while (tempFreq[curRight] > freq[curRight]) {
			tempFreq[s[left].charCodeAt() - aCode]--
			left++
		}
		if (right - left === pLength) {
			result.push(left)
		}
  }
  return result
}
console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
