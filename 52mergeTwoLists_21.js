/**
 * leetcode 21
 * @param {ListNode} l1
 * @param {ListNode} l2
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
var mergeTwoLists = function (l1, l2) {
  const resultLink = new ListNode();
  let trail = resultLink;
  let curNode1 = l1;
  let curNode2 = l2;
  while (curNode1 || curNode2) {
    if (trail.val !== undefined) {
      const newNode = new ListNode();
      trail.next = newNode;
      trail = newNode;
    }
    if (curNode1 && curNode2) {
      if (curNode1.val === curNode2.val) {
        trail.val = curNode1.val;
        const newNode = new ListNode(curNode2.val);
        trail.next = newNode;
        trail = newNode;
        curNode1 = curNode1.next;
        curNode2 = curNode2.next;
      } else if (curNode1.val > curNode2.val) {
        trail.val = curNode2.val;
        curNode2 = curNode2.next;
      } else if (curNode1.val < curNode2.val) {
        trail.val = curNode1.val;
        curNode1 = curNode1.next;
      }
    } else if (curNode1 && !curNode2) {
      trail.val = curNode1.val;
      curNode1 = curNode1.next;
    } else if (curNode2 && !curNode1) {
      trail.val = curNode2.val;
      curNode2 = curNode2.next;
    }
  }
  return resultLink.next;
};

const arr = [];
const arr2 = [1, 2, 2, 3];

const mergedLink = mergeTwoLists(createLinkedList(arr, arr.length), createLinkedList(arr2, arr2.length));
printLinkedList(mergedLink);
