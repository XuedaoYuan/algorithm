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

var deleteDuplicates = function (head) {
  let curNode = head;
  let preNode = null;
  const recordSet = new Set();
  while (curNode) {
    const val = curNode.val;
    const next = curNode.next;
    if (recordSet.has(val)) {
      if (preNode) {
        preNode.next = next;
      }
    } else {
      recordSet.add(val);
      preNode = curNode;
    }
    curNode = next;
  }
  return head;
};

const link = createLinkedList([1, 1, 1, 2, 3, 2, 4, 5, 4], 9);
printLinkedList(link);

const newLink = deleteDuplicates(link);
printLinkedList(newLink);
