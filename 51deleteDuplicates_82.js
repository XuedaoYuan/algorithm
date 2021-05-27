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
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
*/
var deleteDuplicates = function (head) {
  // 利用虚拟头结点的方法
  let dummyHead = new ListNode(-1000);
  dummyHead.next = head;
  let curNode = dummyHead;
  while (curNode.next && curNode.next.next) {
    if (curNode.next.val === curNode.next.next.val) {
      let temp = curNode.next;
      while (temp && temp.val === curNode.next.val) {
        temp = temp.next;
      }
      curNode.next = temp;
    } else {
      curNode = curNode.next;
    }
  }
  return dummyHead.next;
};

const link = createLinkedList([1, 1, 1, 2, 2, 3, 4], 7);

const newLink = deleteDuplicates(link);

printLinkedList(newLink);
