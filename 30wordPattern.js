/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-10 14:38:46
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-10 14:56:22
 */
/**
 * leetcode 290
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function (pattern, s) {
  if (!pattern || !s) {
    return false;
  }
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }
  const recordMap = new Map();
  const recordMap2 = new Map();
  for (let i = 0, len = pattern.length; i < len; i++) {
    const char = pattern[i];
    const word = words[i];
    if (recordMap.get(char)) {
      if (recordMap.get(char) !== word) {
        return false;
      }
    } else {
      recordMap.set(char, word);
    }
    if (recordMap2.get(word)) {
      if (recordMap2.get(word) !== char) {
        return false;
      }
    } else {
      recordMap2.set(word, char);
    }
  }
  return true;
};

console.log(wordPattern('abba', 'dog dog dog dog'));
console.log(wordPattern('abba', 'dog dog2 dog2 dog'));
console.log(wordPattern('abc', 'b c a'));
