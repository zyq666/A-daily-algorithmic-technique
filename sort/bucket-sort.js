const quickSort = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  if (arr.length === 0) return;
  if (startIndex >= endIndex) return;
  const pivot = arr[endIndex];
  let pivotIndex = startIndex;
  for (let index = pivotIndex; index < endIndex; index++) {
    if (arr[index] < pivot) {
      [arr[index], arr[pivotIndex]] = [arr[pivotIndex], arr[index]]
      pivotIndex++;
    }
  }
  [arr[pivotIndex], arr[endIndex]] = [arr[endIndex], arr[pivotIndex]];
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);
}

const bucketSort = (ages) => {
  const burcket = [];
  let result = [];
  for (let i = 0; i < ages.length; i++) {
    const index = Math.floor(ages[i] / 10);
    if (!burcket[index]) burcket[index] = [];
    if (ages[i] >= index * 10 && ages[i] < (index + 1) * 10) {
      burcket[index].push(ages[i]);
    }
  }
  for (let i = 0; i < burcket.length; i++) {
    quickSort(burcket[i] || []);
    if (burcket[i]) result = result.concat(burcket[i]);
  }
  console.log(result);
}

bucketSort([1, 3, 8, 10, 21, 7, 5, 12, 8, 13, 20, 31, 50, 60, 82, 20]);