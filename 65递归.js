function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const tree = new Node(1);
const left1 = new Node(2);
const right1 = new Node(3);
const left2 = new Node(4);
const right2 = new Node(5);
tree.left = left1;
tree.right = right1;
tree.left.left = left2;
tree.left.right = right2;

function preOrder(tree) {
  if (tree) {
    preOrder(tree.left);
    console.log(tree.val);
    preOrder(tree.right);
  }
}
preOrder(tree);
