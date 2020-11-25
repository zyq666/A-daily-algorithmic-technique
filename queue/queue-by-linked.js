class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.headNode = null;
    this.lastNode = null;
    this.head = 0;
    this.tail = 0;
  }

  get isEmpty() {
    return (this.head = this.tail);
  }

  enqueue(item) {
    if (!this.headNode) {
      this.headNode = new Node(item);
      this.lastNode = this.headNode;
      return true;
    }
    const newNode = new Node(item);
    this.lastNode.next = newNode;
    this.lastNode = newNode;
  }

  dequeue() {
    this.headNode = this.headNode.next;
  }
}

const queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();

console.log(queue);
