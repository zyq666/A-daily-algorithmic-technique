// 链表的特点：
// 1.不需要连续的内存空间
// 2.每个节点中存放当数据和一个后继指针(指向下个节点的地址)，双向链表中会多存放一个前驱指针(指向上个节点的地址)
// 3.由于链表不需要连续的内存空间，所以插入、删除操作时不会影响前面的数据，因此时间复杂度是O(1); 但查找时就需要从头遍历，因此时间复杂度是O(n)
// 4.单向链表中尾节点的后继指针指向null，循环链表中尾节点的后继指针指向头节点、
// * 由于链表中至少要存放一个后继指针，因此链表占用的内存至少会比数组大一倍

// 链表中的节点类
class Node {
  constructor(value) {
    // 当前节点的值
    this.value = value;
    // 指向下一个节点的后继指针
    this.next = null;
  }
}

// 链表类
class OneWayLinkedList {
  constructor() {
    // 当前链表的长度
    this._length = 0;
    // 头节点
    this._head = null;
    // 最近一个节点
    this._lastNode = null;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  // 查找第index个节点
  find(index) {
    let node = this._head;
    for (let i = 0; i < index; i++) {
      node = node?.next;
    }
    return node;
  }

  // 追加节点
  add(value) {
    const newNode = new Node(value);
    if (!this._head) this._head = newNode;
    if (this._lastNode) this._lastNode.next = newNode;
    this._lastNode = newNode;
    this._length++;
  }

  // 插入节点
  insert(index, value) {
    // 查找插入位置的上一个节点
    const findNode = this.find(index - 1);
    const newNode = new Node(value);
    newNode.next = findNode.next;
    findNode.next = newNode;
    this._length++;
  }

  // 删除节点
  remove(index) {
    // 查找移除位置的上一个节点
    const findNode = this.find(index - 1);
    const nextNode = findNode.next.next;
    findNode.next = nextNode;
    this._length--;
  }
}

// const link = new OneWayLinkedList();
// link.add(1);
// link.add(2);
// link.add(3);
// link.add(4);
// link.add(5);
// link.insert(3, 8);
// link.add(6);
// link.remove(1);
// let node = link.head;
// for (let i = 0; i < link.length; i++) {
//   console.log(i, node);
//   node = node?.next;
// }

module.exports = { Node, OneWayLinkedList };
