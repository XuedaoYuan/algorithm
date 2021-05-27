/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var levelOrder = function (root) {
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
  return result;
};

const tree = new TreeNode(1);
const left = new TreeNode(3);
const right = new TreeNode(5);
tree.left = left;
tree.right = right;
left.left = new TreeNode(6);
left.right = new TreeNode(10);
right.left = new TreeNode(5);

console.log(levelOrder(tree));
