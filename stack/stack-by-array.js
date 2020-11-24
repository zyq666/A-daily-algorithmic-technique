class Stack {
  constructor(maxLength) {
    this._length = 0;
    this._maxLength = maxLength;
    this._stack = [];
  }

  get length() {
    return this._length;
  }

  push(item) {
    if (this._length >= this._maxLength) {
      console.warn("stack overflow maxlength");
    }
    this._stack.push(item);
    this._length++;
  }

  pop() {
    this._stack.pop();
    this._length--;
  }
}
