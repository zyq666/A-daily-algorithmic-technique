const getPivotIndex = (nums, startIndex = 0, endIndex = nums.length - 1) => {
  const pivot = nums[endIndex];
  for (let i = startIndex; i < endIndex; i++) {
    if (nums[i] >= pivot) {
      [nums[i], nums[startIndex]] = [nums[startIndex], nums[i]];
      startIndex++;
    }
  }
  [nums[startIndex], nums[endIndex]] = [pivot, nums[startIndex]];
  return startIndex;
}

var findKthLargest = function(nums, k, startIndex = 0, endIndex = nums.length - 1) {
  if (nums.length === 0) return -1;
  const pivotIndex = getPivotIndex(nums, startIndex, endIndex);
  if (k === pivotIndex + 1) {
    return nums[pivotIndex];
  }
  if (pivotIndex >= k) {
    return findKthLargest(nums, k, startIndex, pivotIndex - 1);
  } else {
    return findKthLargest(nums, k, pivotIndex + 1, endIndex);
  }
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))