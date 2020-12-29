const splitArray = (nums, startIndex, endIndex) => {
  if (endIndex - startIndex < 2) return [nums[startIndex]];
  const centerIndex = Math.floor((endIndex + startIndex) / 2);
  const left = splitArray(nums, startIndex, centerIndex);
  const right = splitArray(nums, centerIndex + 1, endIndex);
  return mergeArray(left, right);
}

const mergeArray = (left, right) => {
  let [leftIndex, rightIndex] = [0, 0];
  const result = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    result.push(left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex++]);
  }
  if (leftIndex < left.length) {
    result.push(left.slice(leftIndex));
  }
  if (rightIndex < right.length) {
    result.push(right.slice(rightIndex));
  }
}
const mergeSort = nums => {
  const r = splitArray(nums, 0, nums.length - 1);
  console.log(r);
}

mergeSort([11, 8, 3, 1, 2, -5]);
