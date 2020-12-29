const findLastMinIndex = (nums, target) => {
  let [startIndex, centerIndex, endIndex] = [0, Math.floor(nums.length / 2), nums.length - 1];
  if (target > nums[endIndex] || target < nums[startIndex]) return -1;
  let count = 0;
  while (count < 100) {
    count++;
    console.log(startIndex, centerIndex, endIndex)
    if (nums[centerIndex] === target) {
      if (nums[centerIndex] === nums[centerIndex + 1]) {
        startIndex = centerIndex + 1;
      } else {
        break;
      }
    }
    if (nums[centerIndex] > target) {
      endIndex = centerIndex - 1;
      if (target < nums[endIndex] && nums[endIndex - 1] < target) {
        centerIndex = endIndex - 1;
        break;
      }
    }
    if (nums[centerIndex] < target) {
      startIndex = centerIndex + 1;
      if (nums[startIndex] <= target && nums[startIndex + 1] > target) {
        centerIndex = startIndex;
        break;
      }
    }
    centerIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
  }
  return centerIndex;
}

console.log(findLastMinIndex([1, 1, 1, 2, 2, 17, 17, 19, 21, 21, 21, 31], 0))