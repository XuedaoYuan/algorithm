/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-12 10:32:31
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2023-02-28 19:10:02
 */
/* 
leetcode 2
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
var addTwoNumbers = function (l1, l2) {
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
  return resultLink;
};

const l1 = createLinkedList([5, 3, 5], 3);
const l2 = createLinkedList([5, 6, 4, 9], 4);

printLinkedList(addTwoNumbers(l1, l2));
