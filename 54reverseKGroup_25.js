const { ListNode, createLinkedList, printLinkedList } = require('./44ListNode');

var reverseKGroup = function (head, k) {
  let index = 1;
  let curNode = head;
  let recordList = [];
  let resultList = new ListNode();
  trail = resultList;
  //   let trail = (resultList.next = new ListNode());
  while (curNode) {
    recordList.push(curNode);
    if (index === k) {
      index = 1;
      curNode = curNode.next;
      for (let j = k - 1; j >= 0; j--) {
        const node = recordList[j];
        let newNode = new ListNode();
        newNode.val = node.val;
        trail.next = newNode;
        trail = newNode;
      }
      recordList = [];
      continue;
    }
    index++;
    curNode = curNode.next;
  }

  if (recordList && recordList.length > 0) {
    for (let i = 0, len = recordList.length; i < len; i++) {
      const node = recordList[i];
      let newNode = new ListNode();
      newNode.val = node.val;
      trail.next = newNode;
      trail = newNode;
    }
  }

  return resultList.next;
};

const arr = [1, 2, 3, 4, 5];
const link = createLinkedList(arr, arr.length);
printLinkedList(link);
printLinkedList(reverseKGroup(link, 2));
