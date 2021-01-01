const buildSmallRootHeap = (arr) => {
  const len = arr.length;
  arr.unshift(null);
  for (let i = Math.floor(len / 2); i > 0; i--) {
    let index = i;
    while (true) {
      let pos = index;
      if (index * 2 <= len && arr[pos] > arr[index * 2]) pos = index * 2;
      if (index * 2 + 1 <= len && arr[pos] > arr[index * 2 + 1]) pos = index * 2 + 1;
      if (pos === index) break;
      [arr[pos], arr[index]] = [arr[index], arr[pos]];
      index = pos;
    }
  }
  return arr;
}

const mergeSortArr = (arr1, arr2) => {
  const r = buildSmallRootHeap(arr1.concat(arr2));
  let count = r.length - 1;
  while (count > 0) {
    [r[count], r[1]] = [r[1], r[count]];
    count--;
    let index = 1;
    while (true) {
      let pos = index;
      if (index * 2 <= count && r[index] > r[index * 2]) pos = index * 2;
      if (index * 2 + 1 <= count && r[pos] > r[index * 2 + 1]) pos = index * 2 + 1;
      if (pos === index) break;
      [r[pos], r[index]] = [r[index], r[pos]];
      index = pos;
    }
  }
  console.log(r);
}

mergeSortArr([1, 3, 7, 9], [0, 2, 8, 11]);