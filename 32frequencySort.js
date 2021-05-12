/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-10 15:27:53
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-10 15:47:06
 */

/**
 * leetcode 451
 * @param {string} s
 * @return {string}
 */

function getRepeatStr(times, char) {
  return new Array(times).fill(char).join('');
}
var frequencySort = function (s) {
  const recordMap = new Map();
  for (let i = 0, len = s.length; i < len; i++) {
    const val = recordMap.get(s[i]);
    if (val) {
      recordMap.set(s[i], val + 1);
    } else {
      recordMap.set(s[i], 1);
    }
  }
  const result = [];
  recordMap.forEach(function (value, key) {
    console.log(key);
    result.push(getRepeatStr(value, key));
  });
  for (let i = 0, len = result.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (result[i].length < result[j].length) {
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }
  return result.join("");
};

frequencySort('tree');
