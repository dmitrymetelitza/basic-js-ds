const { NotImplementedError } = require("../extensions/index.js");

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.list = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    this.list = addNode(this.list, value);

    function addNode(node, value) {
      if (!node) {
        node = new ListNode(value);
        return node;
      }

      node.next = addNode(node.next, value);
      return node;
    }
  }

  dequeue() {
    if (!this.list) {
      return null;
    }
    let headNode = this.list.value;
    this.list = this.list.next;
    return headNode;
  }
}

module.exports = {
  Queue,
};
