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

var removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  let curNode = head;
  let preNode = null;
  while (curNode) {
    const next = curNode.next;
    if (curNode && curNode.val === val) {
      if (preNode) {
        preNode.next = next;
        curNode.next = null;
      } else {
        head = next;
      }
    } else {
      preNode = curNode;
    }

    curNode = next;
  }
  return head;
};

var removeElements2 = function (head, val) {
  // 使用虚拟头节点的方法
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let curNode = dummyHead;
  while (curNode.next) {
    if (curNode.next.val === val) {
      let delNode = curNode.next;
      curNode.next = delNode.next;
      delNode.next = null;
    } else {
      curNode = curNode.next;
    }
  }
  return dummyHead.next;
};

const arr = [1, 7, 7, 7, 4, 2];
const link = createLinkedList(arr, arr.length);
printLinkedList(removeElements2(link, 7));
