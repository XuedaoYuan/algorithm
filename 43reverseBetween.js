/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

ListNode.prototype.showVal = function () {
  const result = [];
  let cur = this;
  while (cur) {
    result.push(cur.val);
    cur = cur.next;
  }
  return result;
};

var reverseBetween = function (head, left, right) {
  let pre = null;
  let cur = head;
  let index = 1;
  let leftPreNode, leftNode;
  while (cur) {
    let next = cur.next;
    pre = cur;
    cur = next;
    if (index === left) {
      // 记录left之前的那个节点
      leftPreNode = pre;
      leftNode = cur;
    }
    if (left < index && index < right) {
      // 反转
      cur.next = pre;
    }
    if (index === right) {
      if (leftPreNode) {
        leftPreNode.next = cur;
      }
      if (cur) {
        leftNode.next = cur.next;
        cur.next = pre;
      }
      break;
    }
    index++;
  }
  if (left === 1) {
    return;
  }
  return cur;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(head.showVal());
head = reverseBetween(head, 2, 4);

console.log(head.showVal());
