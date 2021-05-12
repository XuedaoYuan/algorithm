/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-10 11:56:16
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-10 14:33:38
 */

/* 
leetcode 202
*/

function getPow(n) {
  return n
    .toString()
    .split('')
    .map((_) => _ - 0)
    .reduce(function (sum, num) {
      sum = sum + Math.pow(num, 2);
      return sum;
    }, 0);
}

/* 获取每一个的值的和 */
function getPow2(n) {
  let sum = 0;
  while (n > 0) {
    let num = n % 10;
    sum += num * num;
    n = parseInt(n / 10);
  }
  return sum;
}

var isHappy = function (n) {
  const recordMap = new Map();
  let flag = false;
  while (!recordMap.get(n)) {
    if (n === 1) {
      flag = true;
      break;
    } else {
      recordMap.set(n, true);

      n = getPow2(n);
    }
  }
  return flag;
};

for (let i = 1, len = 100; i < len; i++) {
  if (isHappy(i)) {
    console.log(i);
  }
}
// console.log(isHappy(2));
