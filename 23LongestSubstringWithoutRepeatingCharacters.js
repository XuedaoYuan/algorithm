/* 
  leetcode 第三题 选张最长不重复子串
*/

var lengthOfLongestSubstring = function (s) {
	var freq = new Array(256).fill(0) // 保存字符出现的频率 用于判断是否重复
	var l = 0,
		r = -1
	var maxLen = 0
	while (l < s.length) {
		if (r + 1 < s.length) {
			var nextCharCode = s[r + 1].charCodeAt()
			if (freq[nextCharCode] === 0) {
				// 说明不存在
				r++
				freq[nextCharCode] += 1
			} else {
				var charCode = s[l].charCodeAt()
				freq[charCode] -= 1
				l++
			}
		} else {
			var charCode = s[l].charCodeAt()
			freq[charCode] -= 1
			l++
		}
		maxLen = Math.max(maxLen, r - l + 1)
	}
	return maxLen
}

console.log(lengthOfLongestSubstring('abcabcbb'))
