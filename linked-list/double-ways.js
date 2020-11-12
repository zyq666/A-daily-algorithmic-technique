// 双向链表的特点
// 每个节点内除了存放数据和指向下一个节点地址的后继指针(next)，还会新增一个前驱指针(prev)指向上一个节点的地址

const { OneWayLinkedList, Node } = require("./one-way");

class DoubleNode extends Node {
  constructor() {
    super();
    this.prev = null;
  }
}

class DoubleWaysLinkedList extends OneWayLinkedList {
  // 追加节点
  add(value) {
    const newNode = new DoubleNode(value);
    if (!this._head) this._head = newNode;
    if (this._lastNode) this._lastNode.next = newNode;
    // 将最近一个节点赋值给新节点的前驱节点
    newNode.prev = this._lastNode;
    this._lastNode = newNode;
    this._length++;
  }

  // 插入节点
  insert(index, value) {
    // 查找插入位置的上一个节点
    const findNode = this.find(index - 1);
    const newNode = new DoubleNode(value);
    const nextNode = findNode.next;
    newNode.next = newNode;
    newNode.prev = findNode;
    nextNode.prev = newNode;
    findNode.next = newNode;
    this._length++;
  }

  // 删除节点
  remove(index) {
    // 查找移除位置的上一个节点
    const findNode = this.find(index);
    findNode.prev.next = findNode.next;
    findNode.next.prev = findNode.prev;
    this._length--;
  }
}

const link = new DoubleWaysLinkedList();
link.add(1);
link.add(2);
link.add(3);
link.add(4);
link.add(5);
link.insert(3, 8);
link.add(6);
link.remove(1);
let node = link.head;
for (let i = 0; i < link.length; i++) {
  console.log(i, node);
  node = node?.next;
}
