/**
 * @param {string[]} ops
 * @return {number}
 */

var calPoints = function (ops) {
  const pointStack = new Stack();
  let total = 0;
  for (let i = 0; i < ops.length; i++) {
    const head = pointStack._stack[pointStack.length - 1];
    let score = 0;
    switch (ops[i]) {
      case "C":
        if (pointStack.length <= 0) {
          break;
        }
        total -= Number(head);
        pointStack.pop();
        break;
      case "D":
        if (pointStack.length <= 0) {
          break;
        }
        score = Number(head) * 2;
        break;
      case "+":
        if (pointStack.length <= 1) {
          break;
        }
        score = head + pointStack._stack[pointStack.length - 2];
        break;
      default:
        score = Number(ops[i]);
    }
    if (ops[i] !== "C") {
      pointStack.push(score);
    }
    total += score;
  }
};

calPoints(["5", "D", "4", "C", "D", "9", "+", "+"]);
