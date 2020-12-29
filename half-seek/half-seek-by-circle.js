const seekNumberIndexCircle = (nums, target) => {
  let [startIndex, centerIndex, endIndex] = [0, Math.floor(nums.length / 2), nums.length - 1];
  if (target > nums[endIndex] || target < nums[startIndex]) return -1;
  if (target === nums[endIndex]) return endIndex;
  while (nums[centerIndex] !== target) {    
    if (nums[centerIndex] > target) {
      endIndex = centerIndex - 1;
      if (target < nums[endIndex]) {
        centerIndex = -1;
        break;
      }
    } else {
      startIndex = centerIndex + 1;
      if (target < nums[startIndex]) {
        centerIndex = -1;
        break;
      }
    }
    centerIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  }
  return centerIndex;
}

console.log(seekNumberIndex([1, 3, 8, 10, 12, 17, 19, 21, 28, 32], 32));