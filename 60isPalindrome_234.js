/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-17 11:38:42
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-17 11:45:31
 */

/* 
leetcode 234 
是否是回文链
1、遍历存进数组， 判断数组是不是回文
2、利用快慢指针找到链表中间点，反转其中一办 再遍历
*/
const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var isPalindrome = function (head) {
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
  let flag = true;
  while (first && second) {
    if (first.val !== second.val) {
      flag = false;
      break;
    }
    first = first.next;
    second = second.next;
  }
  return flag;
};

const arr = [1, 2, 3, 4, 5, 6];
const link = createLinkedList(arr, arr.length);
console.log(isPalindrome(link));
