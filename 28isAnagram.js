/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-10 11:38:13
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-10 11:45:01
 */

/* 
leetcode 242
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const recordMap = new Map();
  for (let i = 0, len = s.length; i < len; i++) {
    const letter = s[i];
    const value = recordMap.get(letter);
    if (value) {
      recordMap.set(letter, value + 1);
    } else {
      recordMap.set(letter, 1);
    }
  }
  for (let i = 0, len = t.length; i < len; i++) {
    const letter = t[i];
    const value = recordMap.get(letter);
    if (value && value >= 1) {
      recordMap.set(letter, value - 1);
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('cat', 'rat'));


