/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-12 14:52:43
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-12 15:20:03
 */
/* 
leetcode 24
*/
const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');
var swapPairs = function (head) {
  if (!head) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let p = dummyHead;
  let node1;
  let node2;
//   let next;
  while (p) {
    node1 = p.next;
    if (!node1) {
      break;
    }
    node2 = p.next.next;
    if (!node2) {
      break;
    }

    // next = node2.next;
    node1.next = node2.next;
    node2.next = node1;
    p.next = node2;
   
    

    p = node1;
  }

  return dummyHead.next;
};

const link = createLinkedList([1, 2, 3, 4, 5, 6], 6);

printLinkedList(swapPairs(link));
