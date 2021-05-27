/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-13 15:05:09
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-13 15:18:34
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 leetcode 19
 */
const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var removeNthFromEnd = function (head, n) {
  // 创建虚拟节点
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let p = dummyNode;
  let q = head;
  for (let i = 0; i < n; i++) {
    if (q) {
      q = q.next;
    }
  }
  while (q) {
    p = p.next;
    q = q.next;
  }
  p.next = p.next.next;
  return dummyNode.next;
};

const arr = [1];
const link = createLinkedList(arr, arr.length);
printLinkedList(removeNthFromEnd(link, 1));
