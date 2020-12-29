const seekNumberIndex = (nums, target) => {
  const findArea = (startIndex = 0, endIndex = nums.length - 1) => {
    let centerIndex = Math.floor((startIndex + endIndex) / 2);
    if (nums[centerIndex] === target) {
      return centerIndex;
    }
    if (nums[centerIndex] < target) {
      if (target > nums[endIndex]) return -1;
      return findArea(centerIndex + 1);
    }
    if (nums[centerIndex] > target) {
      if (target < nums[startIndex]) return -1;
      return findArea(startIndex, centerIndex - 1);
    }
  }
  return findArea();
}

console.log(seekNumberIndex([1, 3, 8, 10, 12, 17, 19, 21, 28, 32], 32));