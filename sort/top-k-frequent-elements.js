var topKFrequent = function(nums, k) {
  let max = 0;
  const map = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) map[nums[i]] = 0;
    map[nums[i]]++;
    if (max < map[nums[i]]) max = map[nums[i]];
  }
  const burcket = new Array();
  for (let i = 0; i < max; i++) {
    burcket.push([])
  }
  for(let key in map) {
    burcket[max - map[key]].push(key);
  }
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < burcket[i].length; j++) {
      if (result.length < k) {
        result.push(Number(burcket[i][j]));
      } else {
        break;
      }
    }
  }
  return result;
};

console.log(topKFrequent([1], 1));
