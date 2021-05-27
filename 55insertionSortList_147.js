/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-12 16:58:26
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-12 17:38:32
 */
/* 
leetcode 147
*/
const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var insertionSortList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  let curNode = head;
  let resultLink = new ListNode();
  let resultLinkHead = resultLink;
  resultLinkHead.val = head.val;
  curNode = curNode.next;
  while (curNode) {
    insertInto(curNode);
    curNode = curNode.next;
  }

  function insertInto(node) {
    let curNode = resultLinkHead;
    let preNode = null;
    while (curNode) {
      const val = curNode.val;
      const next = curNode.next;
      if (node.val <= val) {
        //   插入到最前面
        if (!preNode) {
          const newNode = new ListNode(node.val);
          newNode.next = curNode;
          resultLinkHead = newNode;
        } else {
          // 插入中间
          const newNode = new ListNode(node.val);
          preNode.next = newNode;
          newNode.next = curNode;
        }

        break;
      }
      if (node.val > val && !next) {
        // 插入到最后面
        const newNode = new ListNode(node.val);
        curNode.next = newNode;
        break;
      }
      if (val < node.val && node.val <= next.val) {
        const newNode = new ListNode(node.val);
        curNode.next = newNode;
        newNode.next = next;
        break;
      }
      preNode = curNode;
      curNode = curNode.next;
    }
  }
  return resultLinkHead;
};

const arr = [1, 3];
const link = createLinkedList(arr, arr.length);
printLinkedList(insertionSortList(link));
