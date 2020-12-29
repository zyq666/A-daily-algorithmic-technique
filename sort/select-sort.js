const selectSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[minIndex]) {
        minIndex = j;
      } else {
        continue;
      }
    }
    [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
  }
  console.log(nums)
}

selectSort([11, 8, 3, 1, 2]);
