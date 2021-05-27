/*
 * @Author: XueDao.Yuan 
 * @Date: 2021-05-12 11:33:28 
 * @Last Modified by:   XueDao.Yuan 
 * @Last Modified time: 2021-05-12 11:33:28 
 */
/* 
leetcode 445
*/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/* 创建一个链表 */
function createLinkedList(arr, n) {
  if (n === 0) return null;
  const head = new ListNode(arr[0]);
  let curNode = head;
  for (let i = 1; i < n; i++) {
    curNode.next = new ListNode(arr[i]);
    curNode = curNode.next;
  }
  return head;
}

function printLinkedList(head) {
  const valueList = [];
  let curNode = head;
  while (curNode) {
    valueList.push(curNode.val);
    curNode = curNode.next;
  }
  valueList.push('null');
  console.log(valueList.join('->'));
  return valueList;
}
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
var addTwoNumbers = function (l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  let curNode1 = l1;
  let curNode2 = l2;
  let carryBit = 0;
  let resultLink = new ListNode();
  let node = resultLink;
  while (curNode1 || curNode2) {
    const value1 = curNode1 ? curNode1.val : 0;
    const value2 = curNode2 ? curNode2.val : 0;
    const sum = value1 + value2 + carryBit;
    let val;
    if (sum >= 10) {
      val = sum % 10;
      carryBit = 1;
    } else {
      val = sum;
      carryBit = 0;
    }
    node.val = val;

    curNode1 = curNode1 ? curNode1.next : null;
    curNode2 = curNode2 ? curNode2.next : null;
    if (curNode1 || curNode2) {
      const newNode = new ListNode();
      node.next = newNode;
      node = newNode;
    }
  }
  if (carryBit === 1) {
    const newNode = new ListNode();
    newNode.val = 1;
    node.next = newNode;
  }
  return reverseList(resultLink);
};

const l1 = createLinkedList([5, 6, 4], 3);
const l2 = createLinkedList([7, 2, 4, 3], 4);

printLinkedList(addTwoNumbers(l1, l2));
