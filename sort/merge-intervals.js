const merge = (intervals) => {
  const sort = (arr, startIndex = 0, endIndex = arr.length) => {
    if (endIndex - startIndex <= 1) return [arr[startIndex]];
    const centerIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    const left = sort(arr, startIndex, centerIndex);
    const right = sort(arr, centerIndex, endIndex);
    const result = [];
    let [leftIndex, rightIndex] = [0, 0];
    while (leftIndex < left.length && rightIndex < right.length) {
      result.push(left[leftIndex][0] < right[rightIndex][0] ? left[leftIndex++] : right[rightIndex++]);
    }
    if (leftIndex < left.length) result.push(...left.slice(leftIndex));
    if (rightIndex < right.length) result.push(...right.slice(rightIndex));
    return result;
  }
  const r = sort(intervals);
  let i = 1;
  let mergedArea = [r[0]];
  while (i < r.length) {
    const [mergedStart, mergedEnd] = mergedArea[mergedArea.length - 1];
    const [start, end] = r[i];
    if (start > mergedEnd) {
      mergedArea.push(r[i]);
    } else {
      mergedArea[mergedArea.length - 1] = [Math.min(mergedStart, start), Math.max(mergedEnd, end)];
    }
    i++;
  }
  return mergedArea;
}

merge([[1,4],[0,1]]);