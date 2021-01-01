const heapify = (arr, len, index, callback = (a, b) => a < b) => {
  while (true) {
    let pos = index;
    if (index * 2 <= len && callback(arr[pos], arr[pos * 2])) pos = pos * 2;
    if (index * 2 + 1 <= len && callback(arr[pos], arr[index * 2 + 1])) pos = index * 2 + 1;
    if (pos === index) break;
    [arr[pos], arr[index]] = [arr[index], arr[pos]];
    index = pos;
  }
}

const buildBigHeap = (arr) => {
  arr.unshift(null);
  const len = arr.length - 1;
  for (let i = len; i > 0; i--) {
    heapify(arr, len, i, (a, b) => a < b);
  }
}

const buildSmallHeap = (arr) => {
  arr.unshift(null);
  const len = arr.length - 1;
  for (let i = len; i > 0; i--) {
    heapify(arr, len, i, (a, b) => a > b);
  }
}

const heapSort = (arr) => {
  buildBigHeap(arr);
  let count = arr.length - 1;
  while (count > 1) {
    [arr[count], arr[1]] = [arr[1], arr[count]];
    count--;
    heapify(arr, count, 1, (a, b) => a < b);
  } 
  console.log(arr);
}

heapSort([6, 3, 1, 9, 5, 2, 8]);
