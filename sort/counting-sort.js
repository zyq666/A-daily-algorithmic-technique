const getBurcket = nums => {
  let burcket = [];
  for (let i = 0; i < nums.length; i++) {
    if (!burcket[nums[i]]) burcket[nums[i]] = 0;
    burcket[nums[i]]++;
  }
  for (let i = 1; i < burcket.length; i++) {
    burcket[i] = (burcket[i - 1] || 0) + (burcket[i] || 0)
  }
  return burcket;
}

const CountingSort = nums => {
  const result = [];
  const burcket = getBurcket(nums);
  for (let i = 0; i < nums.length; i++) {
    const index = nums.length - burcket[nums[i]];
    result[index] = nums[i];
    if (burcket[nums[i]] > 0) burcket[nums[i]]--;
  }
  return result;
}

const getCounting = (nums, score) => {
  const burcket = getBurcket(nums);
  return nums.length - burcket[score] + 1;
}

console.log(CountingSort([2, 5, 3, 0, 2, 3, 0, 3]));
console.log(getCounting([2, 5, 3, 0, 2, 3, 0, 3], 0));