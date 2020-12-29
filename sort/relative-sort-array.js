var relativeSortArray = function(arr1, arr2) {
  const bucket = {};
  const modArr = [];
  for (let a of arr2) {
    bucket[a] = [];
  }
  for (let a of arr1) {
    if (bucket[a]) {
      bucket[a].push(a);
    } else {
      modArr.push(a);
    }
  }
  let index = 0;
  for (let i in arr2) {
    arr1.splice(index, bucket[arr2[i]].length, ...bucket[arr2[i]]);
    index = index + bucket[arr2[i]].length;
  }
  arr1.splice(arr1.length - modArr.length, modArr.length, ...modArr.sort((a, b) => a - b));
  return arr1;
};

console.log(
  'output: ',
  relativeSortArray([2,3,1,3,2,4,6,19,9,2,7], [2,1,4,3,9,6]),
  '\n',
  'should output: ',
  [2,2,2,1,4,3,3,9,6,7,19]
)