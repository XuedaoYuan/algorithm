/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-27 14:36:54
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-27 14:41:43
 * leetcode 199
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var rightSideView = function (root) {
  if (!root) return [];
  const queue = [];
  queue.push({
    node: root,
    level: 0
  });
  const result = [];
  while (queue.length > 0) {
    const item = queue.shift();
    const level = item.level;
    const node = item.node;
    if (level === result.length) {
      result[level] = [];
    }
    result[level].push(node.val);

    if (node.left) {
      queue.push({
        node: node.left,
        level: level + 1
      });
    }
    if (node.right) {
      queue.push({
        node: node.right,
        level: level + 1
      });
    }
  }
  const rightViewResult = [];
  for (let i = 0, len = result.length; i < len; i++) {
    const values = result[i];
    rightViewResult.push(values.pop());
  }
  return rightViewResult;
};

const tree = new TreeNode(1);
const left = new TreeNode(2);
const right = new TreeNode(3);
tree.left = left;
tree.right = right;
left.left = new TreeNode(4);
// left.right = new TreeNode(10);
right.right = new TreeNode(5);

console.log(rightSideView(tree));
