/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-14 16:28:42
 * @Last Modified by:   XueDao.Yuan
 * @Last Modified time: 2021-05-14 16:28:42 \
 * leetcode 143
 */
/* 
    思路， 找到中间点
    反转后面的节点
    合并两个链表
*/

const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var reorderList = function (head) {
  if (!head || !head.next) return head;
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //   反转第二个链
  let prev = null,
    cur = slow,
    next = null;
  while (cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  //合并两个链
  let first = head,
    second = prev;
  while (second.next) {
    next = first.next;
    first.next = second;
    first = next;

    next = second.next;
    second.next = first;
    second = next;
  }
  return head;
};

const arr = [1, 2, 3, 4];
const link = createLinkedList(arr, arr.length);
printLinkedList(reorderList(link))
