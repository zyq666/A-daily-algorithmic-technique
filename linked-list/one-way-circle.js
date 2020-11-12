// 单向循环链表的特点：
// 链表的尾节点不指向Null 指向链表的头节点

const { OneWayLinkedList } = require("./one-way");

class OneWayCircleLinkedList extends OneWayLinkedList {
  // 重写链表的add方法 将尾节点指向头节点
  add(value) {
    super.add(value);
    this._lastNode.next = this._head;
  }
}
const link = new OneWayCircleLinkedList();

link.add(1);
link.add(2);
link.add(3);
link.add(4);
link.add(5);
link.add(6);

let node = link.head;
for (let i = 0; i < link.length; i++) {
  console.log(i, node);
  node = node?.next;
}
