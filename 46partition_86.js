/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-12 09:50:58
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2023-02-28 18:59:36
 */
/**
 * leetcode 86
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
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
var partition = function (head, x) {
  if (!head) return null;
  let curNode = head;
  let preNode = null;
  const recordList = [];
  while (curNode) {
    const val = curNode.val;
    const next = curNode.next;
    if (val >= x) {
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

const link = createLinkedList([1,4,3,2,5,2], 6);
const newLink = partition(link, 3);
printLinkedList(newLink);
