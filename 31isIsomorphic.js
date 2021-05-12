/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-10 15:01:50
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-10 15:07:29
 */

/* 
    leetcode 205
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (!s || !t) {
    return false;
  }
  if (s.length !== t.length) return false;
  const recordMap = new Map();
  const recordMap2 = new Map();
  for (let i = 0, len = s.length; i < len; i++) {
    if (recordMap.get(s[i])) {
      if (recordMap.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      recordMap.set(s[i], t[i]);
    }
    if (recordMap2.get(t[i])) {
      if (recordMap2.get(t[i]) !== s[i]) {
        return false;
      }
    } else {
      recordMap2.set(t[i], s[i]);
    }
  }
  return true;
};

console.log(isIsomorphic('title', 'paper'));
