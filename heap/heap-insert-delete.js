import {arrHeap, arrToHeap, heapArr, HeapNode} from './arr-convert-heap.js';

const insertNode = (node) => {
  heapArr.push(node);
  console.log(heapArr);
  let index = heapArr.length - 1;
  while (true) {
    const rootIndex = Math.floor(index / 2);
    if (rootIndex <= 0 || heapArr[index] <= heapArr[rootIndex]) break;
    const temp = heapArr[rootIndex];
    heapArr[rootIndex] = heapArr[index];
    heapArr[index] = temp;
    index = rootIndex;
  }
  console.log(heapArr);
}

const deleteRoot = () => {
  heapArr.shift();
  console.log(heapArr);
}

deleteRoot();