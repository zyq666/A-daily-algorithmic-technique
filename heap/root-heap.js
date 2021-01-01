import { heapArr, HeapNode } from "./arr-convert-heap.js"

export const bigRootHeap = (arr) => {
  arr.unshift(null);
  const len = arr.length - 1;
  for (let i = Math.floor(len / 2); i > 0; i--) {
    let index = i;
    while (true) {
      let maxPos = index;
      if (index * 2 <= len && arr[maxPos] < arr[index * 2]) maxPos = index * 2;
      if (index * 2 + 1 <= len && (arr[maxPos] < arr[index * 2 + 1])) maxPos = index * 2 + 1;
      if (maxPos === index) break;
      [arr[maxPos], arr[index]] = [arr[index], arr[maxPos]];
      index = maxPos;
    }
  }
  arr.shift();
}
bigRootHeap(heapArr);
console.log('大根堆', heapArr);

export const smallRootHeap = (arr) => {
  arr.unshift(null);
  const len = arr.length - 1;
  for (let i = Math.floor(len / 2); i > 0; i--) {
    let index = i;
    while (true) {
      let minPos = index;
      if (index * 2 <= len && arr[minPos] > arr[index * 2]) minPos = index * 2;
      if (index * 2 + 1 <= len && arr[minPos] > arr[index * 2 + 1]) minPos = index * 2 + 1;
      if (minPos === index) break;
      [arr[minPos], arr[index]] = [arr[index], arr[minPos]];
      index = minPos;
    }
  }
  arr.shift();
}
smallRootHeap(heapArr)
console.log('小根堆', heapArr);