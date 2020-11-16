const { DoubleWaysLinkedList } = require("./double-ways");

const strLink = new DoubleWaysLinkedList();
strLink.add("1");
strLink.add("2");

const isOdd = strLink.length % 2 === 0;

const centerIndex = isOdd ? strLink.length / 2 : Math.floor(strLink.length / 2);

let left = strLink.find(centerIndex - 1);
let right = strLink.find(isOdd ? centerIndex : centerIndex + 1);
let result = true;
for (let i = 0; i < centerIndex; i++) {
  if (left.next.value !== right.prev.value) {
    result = false;
    break;
  }
  left = left.prev;
  right = right.next;
}

console.log(`${result ? "是" : "不是"}回文数!`);
