export class HeapNode {
  constructor (val) {
    this.val = val;
    this.left = this.right = null;
  }
}

export const arrToHeap = (arr) => {
  arr.unshift(null);
  const root = new HeapNode(arr[1]);
  const buildHeap = (head, index) => {
    if (!head) return;
    if (arr[2 * index]) head.left = new HeapNode(arr[2 * index]);
    if (arr[2 * index + 1]) head.right = new HeapNode(arr[2 * index + 1]);
    buildHeap(head.left, 2 * index);
    buildHeap(head.right, 2 * index + 1);
  }
  buildHeap(root, 1);
  return root;
}

export const arrHeap = arrToHeap([33, 17, 21, 16, 13, 15, 9, 5, 6, 7, 8, 1, 2]);
   
export const heapToArr = (heap) => {
  const arr = [];
  const stack = [heap];
  while (stack.length > 0) {
    arr.push(stack[0].val);
    if (stack[0].left) {
      stack.push(stack[0].left);
    }
    if (stack[0].right) {
      stack.push(stack[0].right);
    }
    stack.shift();
  }
  return arr;
}

export const heapArr = heapToArr(arrHeap);