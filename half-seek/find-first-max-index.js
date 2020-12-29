const findFirstMaxIndex = (nums, target) => {
  let [startIndex, centerIndex, endIndex] = [0, Math.floor(nums.length / 2), nums.length - 1];
  if (target > nums[endIndex] || target < nums[startIndex]) return -1;
  while (true) {
    if (nums[centerIndex] === target) {
      if (nums[centerIndex] === nums[centerIndex - 1]) {
        endIndex = centerIndex - 1;
      } else {
        break;
      }
    }
    if (nums[centerIndex] < target) {
      startIndex = centerIndex + 1;
      if (target <= nums[startIndex]) {
        centerIndex = startIndex;
        break;
      }
    } 
    if (nums[centerIndex] > target) {
      endIndex = centerIndex - 1;
      if (target <= nums[endIndex] && target > nums[endIndex - 1]) {
        centerIndex = endIndex;
        break;
      } else {
        endIndex = endIndex - 1;
      }
      
    }
    centerIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
  }
  return centerIndex;
}

console.log(findFirstMaxIndex([1, 1, 1, 2, 2, 17, 17, 19, 21, 21, 21, 31], 14))