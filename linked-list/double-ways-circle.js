// 双向循环链表的特点：
// 链表的尾节点的后继指针不指向Null 指向链表的头节点；头节点的前驱指针不指向Null 指向链表的尾节点
const { DoubleWaysLinkedList } = require("./double-ways");

class DoubleWaysCircleLinkedList extends DoubleWaysLinkedList {
  add(value) {
    super.add(value);
    this._head.prev = this._lastNode;
    this._lastNode.next = this._head;
  }
}

const link = new DoubleWaysCircleLinkedList();
link.add(1);
link.add(2);
link.add(3);
link.add(4);
link.add(5);
link.insert(3, 8);
link.add(6);
link.remove(1);
let doubleWaysNode = link.head;
for (let i = 0; i < link.length; i++) {
  console.log(i, doubleWaysNode);
  doubleWaysNode = doubleWaysNode?.next;
}
