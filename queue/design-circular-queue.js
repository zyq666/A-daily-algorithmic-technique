class MyCircularQueue {
  constructor(maxLength) {
    this.maxLength = maxLength;
    this.head = 0;
    this.tail = 0;
    this.queue = [];
    this.length = 0;
  }
  Front = () => {
    return this.queue[this.head] === null || this.queue[this.head] === undefined
      ? -1
      : this.queue[this.head];
  };
  Rear = () => {
    return this.queue[this.tail - 1] === null ||
      this.queue[this.tail - 1] === undefined
      ? -1
      : this.queue[this.tail - 1];
  };

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.tail >= this.maxLength) {
      this.tail = 0;
    }
    this.queue[this.tail++] = value;
    this.length++;
    return true;
  }
  deQueue() {
    if (this.isEmpty()) {
      return false;
    }
    this.queue[this.head >= this.maxLength ? 0 : this.head] = null;
    this.head = this.head + 1 >= this.maxLength ? 0 : this.head + 1;
    this.length--;
    return true;
  }
  isEmpty = () => this.length === 0;
  isFull = () => this.length >= this.maxLength;
}

const circularQueue = new MyCircularQueue(3);
console.log(
  circularQueue.enQueue(2),
  circularQueue.Rear()
  //   circularQueue.Front(),
  //   circularQueue.deQueue(5),
  //   circularQueue.Front(),
  //   circularQueue.deQueue(),
  //   circularQueue.Front(),
  //   circularQueue.enQueue(4),
  //   circularQueue.enQueue(2),
  //   circularQueue.enQueue(2),
  //   circularQueue.enQueue(3)
);
// circularQueue.Rear();
// circularQueue.deQueue();

console.log(circularQueue);
