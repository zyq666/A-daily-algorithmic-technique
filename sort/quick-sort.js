const getPivotIndex = (source, startIndex, endIndex) => {
  const pivot = source[endIndex];
  for (let j = startIndex; j < endIndex; j++) {
    if (source[j] < pivot) {
      [source[startIndex], source[j]] = [source[j], source[startIndex]];
      startIndex++;
    } else {
      continue;
    }
  }
  [source[startIndex], source[endIndex]] = [source[endIndex], source[startIndex]]
  return startIndex;
}
const quickSort = (nums, startIndex = 0, endIndex = nums.length - 1) => {
  if (startIndex >= endIndex) return;
  const pivotIndex = getPivotIndex(nums, startIndex, endIndex);
  quickSort(nums, startIndex, pivotIndex - 1);
  quickSort(nums, pivotIndex + 1, endIndex);
}

quickSort([11, 8, 3, 1, 2, 5]);