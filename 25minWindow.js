/*
 * @Author: XueDao.Yuan
 * @Date: 2020-12-02 13:50:23
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2020-12-02 17:03:32
 */
/* 
  leetcode 76题 在字符串s中寻找包含t的最小子串 只需要考虑英语字母
  
  Input: s = "ADOBECODEBANC", t = "ABC"
  Output: "BANC"
*/

var minWindow = function (str, t) {
	if (t.length === 0 || str.length === 0) {
		//t放在前面，无论如何都会判断其长度是否为0
		return ''
	}
	let len = str.length
	let subStart = len + 1 //最符合的子串的起点,开始大于str长度，如果没有符合的，那么截取到空字符串
	let minLength = len + 1 //长度最小值,初始为str长度加1,尽量大，然后有符合的就会变更
	let missType = 0 //缺失的种类
	let map = new Map() //用来存储t中字符，以及缺失度
	for (let i = 0; i < t.length; i++) {
		//t字符串中个字符出现的位置
		if (map.has(t[i])) {
			//如果存在，那么增加1
			let value = map.get(t[i]) + 1
			map.set(t[i], value)
		} else {
			//如果不存在，那么设置为1
			map.set(t[i], 1)
			missType++
		}
	}
	for (let start = 0, end = 0; start <= end && end < len; end++) {
		//end遍历字符串，从左往右一格一格遍历
		if (map.has(str[end])) {
			//end对应的字符在t中出现过
			let value = map.get(str[end]) - 1 //出现过，则减1
			map.set(str[end], value)
		}
		if (map.get(str[end]) === 0) {
			//只有等于0时，缺失种类减1
			missType--
		}
		while (missType === 0) {
			//只要缺少种类为0，取得符合的start和end，然后滑动窗口等
			let length = end - start + 1 //获得符合子串的长度
			if (length < minLength) {
				//有较优子串，更新子串起点subStart
				minLength = length
				subStart = start
			}
			//左指针右移，处理左指针。比较左指针的字符，如果在map中出现，则做以下改动
			if (map.has(str[start])) {
				//start对应的字符在t中出现过
				let value = map.get(str[start]) + 1 //出现过，则需求加1
				map.set(str[start], value)
			}
			if (map.get(str[start]) > 0) {
				//只有等于0时，缺失种类减1
				missType++
			}
			start++ //左指针右移一位
		}
	}
	return str.substr(subStart, minLength)
}
