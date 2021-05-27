/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-13 14:33:29
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-13 14:44:39
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var deleteNode = function (node) {
  if (!node) return;
  if (!node.next) {
    node = null;
    return;
  }
  node.val = node.next.val;
  let delNode = node.next;
  node.next = delNode.next;
  delNode = null;
  return;
};

const node1 = new ListNode(1);
const head = node1;
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = null;
printLinkedList(head);
deleteNode(node2);
printLinkedList(head);
