/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  const minStackHead = this.minStack[this.minStack.length - 1];
  console.log(minStackHead);
  if (minStackHead === undefined || minStackHead >= x) {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const minStackHead = this.minStack[this.minStack.length - 1];
  if (minStackHead === this.stack[this.stack.length - 1]) {
    this.minStack.pop();
  }
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

var minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);

console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
console.log(minStack);
