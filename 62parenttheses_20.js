/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-19 17:02:55
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-19 18:04:44
 */

const { Stack } = require('./61Stack');

/* const str = "{}()[]"
for(let i = 0, len = str.length; i < len; i++){
    console.log(str[i] === '[');
} */

var isValid = function (s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  for (let i = 0, len = s.length; i < len; i++) {
    const symbol = s[i];
    debugger;
    if (symbol === '[' || symbol === '(' || symbol === '{') {
      stack.push(symbol);
    } else {
      if (stack && stack.length > 0) {
        if (stack[stack.length - 1] === map[symbol]) {
          stack.pop();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  if (stack && stack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid('()[]{}'));
