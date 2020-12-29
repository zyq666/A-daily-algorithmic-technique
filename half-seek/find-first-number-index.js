const findFirstNumberIndex = (nums, target) => {
  let [startIndex, centerIndex, endIndex] = [0, Math.floor(nums.length / 2), nums.length - 1];
  if (target > nums[endIndex] || target < nums[startIndex]) return -1;
  while (true) {
    if (nums[centerIndex] === target) {
      if (nums[centerIndex - 1] === target) {
        endIndex = centerIndex - 1;
      } else {
        break;
      }
    }
    if (nums[centerIndex] < target) {
      startIndex = centerIndex + 1;
      if (target < nums[startIndex]) {
        centerIndex = -1;
        break;
      }
    }
    if (nums[centerIndex] > target) {
      endIndex = centerIndex - 1;
      if (target > nums[endIndex]) {
        centerIndex = -1;
        break;
      }
    }
    centerIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
  }
  return centerIndex;
}

console.log(findFirstNumberIndex([1, 1, 1, 10, 12, 17, 17, 21, 21, 21, 31], 15))