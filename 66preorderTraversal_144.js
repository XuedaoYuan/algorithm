function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var preorderTraversal = function (root) {
  const result = [];
  function recurse(node) {
    if (node) {
      result.push(node.val);
      recurse(node.left);

      recurse(node.right);
    }
  }
  recurse(root);
  return result;
};

var preorderTraversal2 = function (root) {
  const result = [];
  const stack = [];
  if (root !== null) {
    stack.push(root);
    while (stack.length > 0) {
      const node = stack.pop();
      result.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return result;
};

const tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
console.log(preorderTraversal(tree));
console.log(preorderTraversal2(tree));
