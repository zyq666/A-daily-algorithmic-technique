const insertSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    const value = nums[i];
    while (j >= 0) {
      console.count('insert');
      if (nums[j] > value) {
        nums[j+1] = nums[j];
        j--;
      } else {
        break;
      }
    }
    nums[j + 1] = value;
  }
  console.log(nums);
}

insertSort([11, 9, 8, 7 ,6]);
