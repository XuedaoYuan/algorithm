/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-27 15:04:19
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-27 15:45:58
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const queue = [];
  queue.push({
    num: n,
    step: 0
  });
  const visited = new Array(n + 1);
  visited.fill(false);
  visited[n] = true;

  while (queue.length > 0) {
    const item = queue.shift();
    const num = item.num;
    const step = item.step;

    for (let i = 1; ; i++) {
      const _num = num - i * i;
      if (_num < 0) {
        break;
      }
      if (_num === 0) return step;
      if (visited[_num] === false) {
        queue.push({
          num: _num,
          step: step + 1
        });
        visited[_num] = true;
      }
    }
  }
};

console.log(numSquares(7168));
