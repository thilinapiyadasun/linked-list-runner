function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList(head) {
  this.head = head;
}

LinkedList.prototype.appendToTail = function (data) {
  let newNode = new Node(data);
  let node = this.head;
  while (node.next != null) {
    node = node.next;
  }
  node.next = newNode;
};

LinkedList.prototype.removeNode = function (node, data) {
  if (node.next === null) {
    return;
  }
  if (node.next.data === data) {
    let nextNode = node.next.next;
    node.next = nextNode;
    return;
  } else {
    this.removeNode(node.next, data);
  }
};

LinkedList.prototype.remove = function (data) {
  if (this.head.data === data) {
    this.head = this.head.next;
    return;
  }
  this.removeNode(this.head, data);
};

LinkedList.prototype.print = function () {
  let node = this.head;

  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
  console.log("=======================");
};

LinkedList.prototype.runner = function () {
  let fast = this.head.next;
  let slow = this.head;

  while (fast != null) {
    fast = fast.next;
    if (fast != null) {
      fast = fast.next;
      slow = slow.next;
    }
  }

  let lower = this.head;
  let upper = slow.next;
  slow.next = null;

  let linknedList = new LinkedList(new Node(lower.data));
  lower = lower.next;
  while (upper != null || lower != null) {
    if (upper != null) {
      linknedList.appendToTail(upper.data);
      upper = upper.next;
    }
    if (upper != null) {
      linknedList.appendToTail(lower.data);
      lower = lower.next;
    }
  }

  return linknedList;
};

const node = new Node(1);
let linkedList = new LinkedList(node, null);

linkedList.appendToTail(2);
linkedList.appendToTail(3);
linkedList.appendToTail(4);
linkedList.appendToTail(5);
linkedList.appendToTail(6);
linkedList.appendToTail(7);
linkedList.appendToTail(8);
linkedList.appendToTail(9);

linkedList.appendToTail(11);
linkedList.appendToTail(12);
linkedList.appendToTail(13);
linkedList.appendToTail(14);
linkedList.appendToTail(15);
linkedList.appendToTail(16);
linkedList.appendToTail(17);
linkedList.appendToTail(18);
linkedList.appendToTail(19);

linkedList.print();
linkedList = linkedList.runner();
linkedList.print();
