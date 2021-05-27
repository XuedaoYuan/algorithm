/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-12 10:26:30
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-12 10:29:20
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
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return null;
  let curNode = head;
  let preNode = null;
  let index = 1;
  const recordList = [];
  while (curNode) {
    const val = curNode.val;
    const next = curNode.next;
    if (index % 2 === 0) {
      curNode.next = null;
      recordList.push(curNode);
      if (preNode) {
        preNode.next = next;
      } else {
        //   此时需要变更head， 因为第一个元素就满足条件 大于等于x
        head = next;
      }
    } else {
      preNode = curNode;
    }
    curNode = next;
    index++;
  }
  // 如果preNode是null  说明全部大于x
  let trail = preNode;
  if (recordList && recordList.length > 0) {
    for (let i = 0, len = recordList.length; i < len; i++) {
      const node = recordList[i];
      if (i === 0 && !trail) {
        trail = node;
        head = node;
        continue;
      }
      trail.next = node;
      trail = node;
    }
  }
  return head;
};

const arr = [2, 1, 3, 5, 6, 4, 7];
const link = createLinkedList(arr, arr.length);
const newLink = oddEvenList(link);
printLinkedList(newLink);
