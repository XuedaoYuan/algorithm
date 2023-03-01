/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-12 14:52:43
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2023-03-01 16:36:47
 */
/* 
leetcode 24
*/
const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');


const link = createLinkedList([1, 2, 3, 4, 5, 6], 6);

printLinkedList(swapPairs(link));
