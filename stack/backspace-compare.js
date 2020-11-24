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
    if (this._length <= 0) return;
    this._stack.pop();
    this._length--;
  }
}

var backspaceCompare = function (S, T) {
  const maxLength = Math.max(S.length, T.length);
  const leftStack = new Stack();
  const rightStack = new Stack();
  for (let i = 0; i < maxLength; i++) {
    leftStack[S[i] === "#" ? "pop" : "push"](S[i]);
    rightStack[T[i] === "#" ? "pop" : "push"](T[i]);
  }
  return leftStack._stack.join("") === rightStack._stack.join("");
};
