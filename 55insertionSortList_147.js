/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-12 16:58:26
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2023-02-28 20:02:59
 */
/* 
leetcode 147
*/
const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var insertionSortList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  let curNode = head;
  let firstNode = new ListNode();
  let resultLinkHead = firstNode;
  firstNode.val = head.val;
  curNode = curNode.next;
  while (curNode) {
    insertInto(curNode);
    curNode = curNode.next;
  }

  function insertInto(node) {
    let pointer = resultLinkHead;
    let preNode = null;
    while (pointer) {
      const val = pointer.val;
      const next = pointer.next;
      if (node.val <= val) {
        //   插入到最前面
        if (!preNode) {
          const newNode = new ListNode(node.val);
          newNode.next = pointer;
          resultLinkHead = newNode;
        } else {
          // 插入中间
          const newNode = new ListNode(node.val);
          preNode.next = newNode;
          newNode.next = pointer;
        }

        break;
      }
      if (node.val > val && !next) {
        // 插入到最后面
        const newNode = new ListNode(node.val);
        pointer.next = newNode;
        break;
      }
      /* if (val < node.val && node.val <= next.val) {
        console.log(1);
        printLinkedList(resultLinkHead)
        const newNode = new ListNode(node.val);
        pointer.next = newNode;
        newNode.next = next;
        break;
      } */
      preNode = pointer;
      pointer = pointer.next;
    }
  }
  return resultLinkHead;
};

const arr = [1, 3, 2, 5, 10, 0, 7];
const link = createLinkedList(arr, arr.length);
printLinkedList(insertionSortList(link));
