const heapify = (arr, index, len) => {
  while (true) {
    let pos = index
    if (index * 2 <= len && arr[pos] < arr[index * 2]) pos = index * 2
    if (index * 2 + 1 <= len && arr[pos] < arr[index * 2 + 1])
      pos = index * 2 + 1
    if (pos === index) break
    ;[arr[pos], arr[index]] = [arr[index], arr[pos]]
    index = pos
  }
}

const buildRootHeap = (arr) => {
  arr.unshift(null)
  const len = arr.length - 1
  for (let i = Math.floor(len / 2); i > 0; i--) {
    heapify(arr, i, len)
  }
  arr.shift()
}

const popAndInsertNode = (arr, node) => {
  arr.shift()
  arr.push(node)
  heapify(arr, 0, arr.length - 1)
}

const getTopK = (arr, k) => {
  const heapArr = arr.slice(0, k)
  buildRootHeap(heapArr)
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heapArr[0]) {
      popAndInsertNode(heapArr, arr[i])
    }
  }
  console.log(heapArr.sort());
  console.log([43349,40202,41752,35778,84,53936,37591,3399,50068,2638,9396,37663,42754,1458,80,7,64,402,5541,8762,531,2031,365,39546,5363,664,861,5134,-22,0,683,-6,118,539,790,0,31,1,4,-140,53,397,7,4,6,601,30,-1712,202,-4,3,31,96,4,5747,5,52,61,0,-1,775,-220,8,-223,-16699,-1919,-4283,-3,-22721,-390,-37092,-726,-524,51,-8,-6,-9972,-4977,-10603,-8,-23957,-714,-446,-3834,-61087,-355,-56074,6,9,-48496,9,-15357,-30,-21019,-24528,-565,-76,3,-4818,7,-4,-7197,-26607,-211,140,-23702,-7410,-48874,-715,4,-60981,-67,-23620,-41,3,-2482,-59,-9417,-911,-8737,-6263,38,4,-16,-33152,-868,8681,-8,8,29,412].sort())
  return heapArr
}

getTopK(
  [
    62577,
    -220,
    -8737,
    -22,
    -6,
    59956,
    5363,
    -16699,
    0,
    -10603,
    64,
    -24528,
    -4818,
    96,
    5747,
    2638,
    -223,
    37663,
    -390,
    35778,
    -4977,
    -3834,
    -56074,
    7,
    -76,
    601,
    -1712,
    -48874,
    31,
    3,
    -9417,
    -33152,
    775,
    9396,
    60947,
    -1919,
    683,
    -37092,
    -524,
    -8,
    1458,
    80,
    -8,
    1,
    7,
    -355,
    9,
    397,
    -30,
    -21019,
    -565,
    8762,
    -4,
    531,
    -211,
    -23702,
    3,
    3399,
    -67,
    64542,
    39546,
    52500,
    -6263,
    4,
    -16,
    -1,
    861,
    5134,
    8,
    63701,
    40202,
    43349,
    -4283,
    -3,
    -22721,
    -6,
    42754,
    -726,
    118,
    51,
    539,
    790,
    -9972,
    41752,
    0,
    31,
    -23957,
    -714,
    -446,
    4,
    -61087,
    84,
    -140,
    6,
    53,
    -48496,
    9,
    -15357,
    402,
    5541,
    4,
    53936,
    6,
    3,
    37591,
    7,
    30,
    -7197,
    -26607,
    202,
    140,
    -4,
    -7410,
    2031,
    -715,
    4,
    -60981,
    365,
    -23620,
    -41,
    4,
    -2482,
    -59,
    5,
    -911,
    52,
    50068,
    38,
    61,
    664,
    0,
    -868,
    8681,
    -8,
    8,
    29,
    412,
  ],
  131
)
