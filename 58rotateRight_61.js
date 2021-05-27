/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-14 15:17:43
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-14 16:06:43
 */
const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var rotateRight = function (head, k) {
  if (!head) {
    return null;
  }
  if (!head.next || k === 0) return head;
  // 获取link的长度
  let linkLen = 0;
  let curNode = head;
  while (curNode) {
    linkLen++;
    curNode = curNode.next;
  }
  k = k % linkLen;
  if (k === 0) return head;
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let p = dummyNode;
  let q = head;
  for (let j = 0; j < k; j++) {
    if (q) {
      q = q.next;
    }
  }
  while (q) {
    q = q.next;
    p = p.next;
  }
  //   此时p后面的节点需要移到前面
  let newHead = p.next;
  p.next = null;
  let curNode2 = newHead;
  while (curNode2.next) {
    curNode2 = curNode2.next;
  }
  curNode2.next = head;
  return newHead;
};

const arr = [1, 2, 3];
const link = createLinkedList(arr, arr.length);
printLinkedList(rotateRight(link, 0));
