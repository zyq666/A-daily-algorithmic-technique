class Queue {
  constructor(maxLength) {
    this.queue = [];
    this.maxLength = maxLength;
    this.head = 0;
    this.tail = 0;
  }

  get isEmpty() {
    return this.head === this.tail;
  }

  get isFull() {
    return !this.isEmpty && this.tail >= this.maxLength;
  }

  enqueue(item) {
    if (this.tail >= this.maxLength && this.head === 0) {
      return false;
    }
    if (this.head !== 0) {
      for (let i = this.head; i < this.tail; i++) {
        this.queue[i - this.head] = this.queue[i];
      }
      this.tail -= this.head;
    }

    this.queue[this.tail] = item;
    this.tail++;
    this.head = 0;
    return true;
  }

  dequeue() {
    if (this.head >= this.tail) {
      return false;
    }
    this.queue[this.head] = null;
    this.head++;
    return true;
  }
}
