/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-11 14:09:51
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-11 14:29:03
 */

/**
 * leetcode 49
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const recordMap = new Map();
  for (let i = 0, len = strs.length; i < len; i++) {
    const word = strs[i];
    const sortWord = word.split('').sort().join();
    const list = recordMap.get(sortWord);
    if (list) {
      list.push(word);
    } else {
      recordMap.set(sortWord, [word]);
    }
  }
  return Array.from(recordMap.values())
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
