/* 链表的一些操作 */

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

/* 
    // 删除 理解意思就行
function deleteLinkedList(head) {
  let curNode = head;
  while (curNode) {
    let delNode = curNode;
    curNode = curNode.next;
    delNode = null;
  }
} */

/* const linkHead = createLinkedList([1, 2, 3, 4, 5], 5);

printLinkedList(linkHead); */

module.exports = {
  ListNode,
  createLinkedList,
  printLinkedList
};
