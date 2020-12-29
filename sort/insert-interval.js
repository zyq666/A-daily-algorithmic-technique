const sort = (arr, startIndex = 0, endIndex = arr.length) => {
  if (endIndex - startIndex < 2) return;
  const sortAndGetPivot = (arr, startIndex = 0, endIndex = arr.length) => {
    const pivot = arr[endIndex - 1];
    for (let i = startIndex; i < endIndex - 1; i++) {
      if (arr[i][0] <= pivot[0]) {
        [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
        startIndex++;
      }
    }
    [arr[startIndex], arr[endIndex - 1]] = [arr[endIndex - 1], arr[startIndex]]
    return startIndex;
  } 
  const pivotIndex = sortAndGetPivot(arr, startIndex, endIndex);
  sort(arr, startIndex, pivotIndex);
  sort(arr, pivotIndex, endIndex);
}

var insert = function(intervals, newInterval) {
  intervals.push(newInterval);
  sort(intervals);
  console.log(intervals);
  const mergedArea = [intervals[0]];
  let i = 1;
  while (i < intervals.length) {
    const [mergedStart, mergedEnd] = mergedArea[mergedArea.length - 1];
    const [start, end] = intervals[i];
    if (start > mergedEnd) {
      mergedArea.push(intervals[i]);
    } else {
      mergedArea[mergedArea.length - 1] = [Math.min(mergedStart, start), Math.max(end, mergedEnd)];
    }
    i++;
  }
  console.log(mergedArea)
  return mergedArea;
};

insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8]);