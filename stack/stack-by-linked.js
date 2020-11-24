class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(maxLength) {
    this._length = 0;
    this._head = null;
    this._maxLength = maxLength;
  }

  get head() {
    return this._head;
  }

  get length() {
    return this._length;
  }

  push(item) {
    if (this._length >= this._maxLength) {
      console.warn("stack overflow maxlength");
    }
    const node = new Node(item);
    const tempHead = this._head;
    node.next = tempHead;
    this._head = node;
    this._length++;
  }

  pop() {
    this._head = this._head.next;
    this._length--;
  }
}

var isValid = function (s) {
  if (s.length === 0) return false;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = new Stack(s.length);
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      continue;
    }
    if (map[stack.head.value] === s[i]) {
      stack.pop();
      continue;
    }
    stack.push(s[i]);
  }
  return stack.length === 0;
};

console.log(isValid(""));
