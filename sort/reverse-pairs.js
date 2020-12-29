var r = function(nums, startIndex = 0, endIndex = nums.length - 1) {
  if (nums.length === 0) return [[], 0];
  if (endIndex - startIndex < 1) return [[nums[startIndex]], 0];
  const centerIndex = Math.floor((endIndex - startIndex) / 2 + startIndex);
  const [left, leftCount] = r(nums, startIndex, centerIndex);
  const [right, rightCount] = r(nums, centerIndex + 1, endIndex);
  let count = leftCount + rightCount;
  const result = [];
  let [leftIndex, rightIndex] = [0, 0];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(left[leftIndex]);
      count += right.length - rightIndex;
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  if (rightIndex < right.length) {
    result.push(...right.slice(rightIndex));
  }
  if (leftIndex < left.length) {
    result.push(...left.slice(leftIndex));
  }
  return [result, count];
};

var reversePairs = (nums) => {
   return r(nums)[1];
}

reversePairs([7, 5, 6, 4])