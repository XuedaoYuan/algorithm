function LinkedNode(val, next, prev) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
}

/* 创建一个链表 */
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  const head = new LinkedNode(arr[0]);
  let pointer = head;
  for (let i = 1; i < arr.length; i++) {
    const newNode = new LinkedNode(arr[i]);
    pointer.next = newNode;
    pointer = newNode;
  }
  return head;
}

function createLinkedList2(arr) {
  if (arr.length === 0) return null;
  const head = new LinkedNode(arr[0]);
  let pointer = head;
  pointer.prev = null;

  for (let i = 1; i < arr.length; i++) {
    const newNode = new LinkedNode(arr[i]);
    newNode.prev = pointer;
    pointer.next = newNode;
    pointer = newNode;
  }
  return head;
}
/* 打印链表的值 */
function printLinkedList(head) {
  let pointer = head;
  let str = '';
  while (pointer) {
    str = str + pointer.val + '->';
    pointer = pointer.next;
  }
  str += 'null';
  console.log(str);
}

// 插入节点
// 往一个有序的链表中插入一个节点， 保存顺序

function insertIntoSortedLinked(link, newNode) {
  if (!link) {
    return newNode;
  }
  let p = link;
  let head = link;
  let preNode = null;
  while (p) {
    if (newNode.val < p.val) {
      if (!preNode) {
        // 还不存在前置节点， 说明需要插入第一位
        newNode.next = p;
        return newNode;
      } else {
        // 说明需要插入中间
        newNode.next = p;
        preNode.next = newNode;
        return head;
      }
    }
    preNode = p;
    p = p.next;
  }
  // 如果上述没有返回 说明需要插入尾部
  if (preNode) {
    preNode.next = newNode;
  }
  return head;
}
/* let newLink = link;
for (let i = 0, len = 20; i < len; i++) {
  newLink = insertIntoSortedLinked(newLink, new LinkedNode(i));
  printLinkedList(newLink);
}
 */

function reverseLinkedList(link) {
  if (!link) {
    return link;
  }

  let pre = null,
    p = link;
  while (p) {
    let next = p.next; // 先获取到下一个节点
    p.next = pre; // 此时p.next 这个指向已经无用了， 可以重置为上一个节点
    // 此时完成了反转，开始循环下下一个节点
    pre = p;
    p = next;
  }
  return pre;
}

/* printLinkedList(link);
printLinkedList(reverseLinkedList(link)); */

function deleteOneNode(link, node, predicate) {
  let pre = null;
  let p = link;
  let head = link;
  while (p) {
    if (predicate(p, node)) {
      // 满足判断函数即删除
      if (!pre) {
        // 说明删除的是第一个
        head = p.next;
        break;
      } else {
        pre.next = p.next;
        break;
      }
    }
    pre = p;
    p = p.next;
  }
  return head;
}
// printLinkedList(deleteOneNode(link, new LinkedNode(3), (a, b) => a.val === b.val));

function deleteMultiNode(link, node, predicate) {
  let pre = null;
  let p = link;
  let head = link;
  while (p) {
    if (predicate(p, node)) {
      // 满足判断函数即删除
      if (!pre) {
        // 说明删除的是第一个
        head = p.next;
        pre = null;
        p = p.next;
        continue;
      } else {
        pre.next = p.next;
        p = p.next;
        continue;
      }
    }
    pre = p;
    p = p.next;
  }
  return head;
}
/* const link = createLinkedList([2, 2, 1, 2, 2, 4, 2, 3]);
printLinkedList(link);
printLinkedList(deleteMultiNode(link, new LinkedNode(2), (a, b) => a.val <= b.val)); */

function mergeTwoLists(l1, l2) {
  const head = new LinkedNode();
  let p = head;
  let curNode1 = l1;
  let curNode2 = l2;
  while (curNode1 || curNode2) {
    const newNode = new LinkedNode();
    p.next = newNode;
    p = newNode;
    if (curNode1 && curNode2) {
      if (curNode1.val === curNode2.val) {
        p.val = curNode1.val;
        const newNode = new LinkedNode(curNode2.val);
        p.next = newNode;
        p = newNode;
        curNode1 = curNode1.next;
        curNode2 = curNode2.next;
      } else if (curNode1.val > curNode2.val) {
        p.val = curNode2.val;
        curNode2 = curNode2.next;
      } else if (curNode1.val < curNode2.val) {
        p.val = curNode1.val;
        curNode1 = curNode1.next;
      }
    } else if (curNode1 && !curNode2) {
      p.val = curNode1.val;
      curNode1 = curNode1.next;
    } else if (curNode2 && !curNode1) {
      p.val = curNode2.val;
      curNode2 = curNode2.next;
    }
  }
  return head.next;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let carryBit = 0; //  需要考虑大于10的进位
  let head = new ListNode();
  let p = head;
  while (p1 || p2) {
    let val1 = p1.val || 0;
    let val2 = p2.val || 0;
    let sum = val1 + val2 + carryBit;
    let val;
    if (sum >= 10) {
      carryBit = 1;
      val = sum % 10;
    } else {
      carryBit = 0;
      val = sum;
    }
    p.val = val;
    p1 = p1 ? p1.next : null;
    p2 = p2 ? p2.next : null;
    if (p1 || p2) {
      // 说明还存在下一个
      const newNode = new ListNode();
      p.next = newNode;
      p = newNode;
    }
  }
  // 说明最后一位是1, 比如这种情况 [1, 2] + [2, 8] = [3, 0, 1], 21 + 82 = 103
  if (carryBit === 1) {
    const newNode = new ListNode(1);
    p.next = newNode;
    p = newNode;
  }

  return head;
};

var deleteDuplicates = function (head) {
  let p = head;
  let preNode = null;
  const recordSet = new Set();
  while (p) {
    const val = p.val;
    const next = p.next;
    if (recordSet.has(val)) {
      if (preNode) {
        preNode.next = next;
        p = next;
        continue;
      }
    } else {
      recordSet.add(val);
      preNode = p;
      p = next;
    }
  }
  return head;
};

var swapPairs = function (head) {
  if (!head) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  let p1 = head;
  let p2 = p1.next;
  let pre = null;
  let newHead = p2;
  while (p1 && p2) {
    let next = p2.next;

    p2.next = p1;
    p1.next = next;
    if (pre) {
      pre.next = p2;
    }
    pre = p1;
    p1 = next;
    if (p1) {
      p2 = p1.next;
    } else {
      p2 = null;
    }
  }
  return newHead;
};

// let link1 = createLinkedList([1, 2]);
// printLinkedList(swapPairs(link1));

// link1 = createLinkedList([1]);
// printLinkedList(swapPairs(link1));
// link1 = createLinkedList([]);
// printLinkedList(swapPairs(link1));

// let link = createLinkedList2([1, 2, 3]);
// console.log(link);
