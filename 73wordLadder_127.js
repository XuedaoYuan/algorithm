/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-27 16:08:06
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-27 16:28:12
 */

function canTransfer(word1, word2) {
  if (word1 === word2) return true;
  const word1Letters = word1.split('');
  const word2Letters = word2.split('');
  if (word1Letters.length !== word2Letters.length) {
    return false;
  }
  let temp = 0;
  const len = word1Letters.length;
  for (let i = 0; i < len; i++) {
    if (word1Letters[i] !== word2Letters[i]) {
      temp++;
      if (temp > 1) {
        break;
      }
    }
  }
  return temp === 1;
}

var ladderLength = function (beginWord, endWord, wordList) {
  const queue = [];
  queue.push({
    word: beginWord,
    step: 1
  });
  while (queue.length > 0) {
    const item = queue.shift();
    const word = item.word;
    const step = item.step;
    if (word === endWord) return step;
    for (let i = 0, len = wordList.length; i < len; i++) {
      const _word = wordList[i];
      if (canTransfer(word, _word)) {
        queue.push({
          word: _word,
          step: step + 1
        });
      }
    }
  }
  return 0;
};

console.log(canTransfer('hit', 'hor'));

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'csg']));
