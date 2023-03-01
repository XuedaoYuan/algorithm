function LinkedNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new LinkedNode(1);
let head = node1;
const node2 = new LinkedNode(2);
const node3 = new LinkedNode(3);
const node4 = new LinkedNode(4);
const node5 = new LinkedNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function isLoopLinked(link) {
  let p = link;
  const map = new Map();
  map.set(p, true);
  while (p) {
    p = p.next;
    if (map.get(p)) {
      return true;
    } else {
      map.set(p, true);
    }
  }
  return false;
}

function isLoopLinked2(link) {
  let p1 = link;
  let p2 = link;

  while (p1 && p2) {
    p1 = p1.next;
    p2 = p2 && p2.next ? p2.next.next : null;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
}
console.log(isLoopLinked2(head));
