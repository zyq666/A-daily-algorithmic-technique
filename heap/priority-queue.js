const heapify = (arr, index, len, callback) => {
  while (true) {
    let pos = index;
    if (index * 2 <= len && callback(arr[pos], arr[index * 2])) pos = index * 2;
    if (index * 2 + 1 <= len && callback(arr[pos], arr[index * 2 + 1])) pos = index * 2 + 1;
    if (pos === index) break;
    [arr[pos], arr[index]] = [arr[index], arr[pos]];
    index = pos;
  }
}

const buildRootHeap = (arr, callback) => {
  const len = arr.length;
  arr.unshift(null);
  for (let i = Math.floor(len / 2); i > 0; i--) {
    heapify(arr, i, len, callback);
  }
  arr.shift();
}

const deleteHeapRoot = (arr) => {
  const root = arr.shift();
  if (arr.length) {
    arr.unshift(null, arr.pop());
    heapify(arr, 1, arr.length - 1, (root, leaf) => root.time > leaf.time);
    arr.shift();
  }
  return root;
}

const priorityQueue = (tasks) => {
  buildRootHeap(tasks, (root, leaf) => root.time > leaf.time);
  let timer = setInterval(() => {
    console.count();
  }, 1000);
  let lastTime = 0;
  const run = () => {
    if (!tasks.length) {
      clearInterval(timer);
      return;
    }
    const {fn, time} = deleteHeapRoot(tasks);
    setTimeout(() => {
      fn();
      run();
    }, time - lastTime);
    lastTime = time;
  }
  run();
}

priorityQueue([
  {
    time: 4000,
    fn: () => {
      console.log('after 4000s run taskA')
    },
  },
  {
    time: 2000,
    fn: () => {
      console.log('after 2000s run taskB')
    },
  },
  {
    time: 3000,
    fn: () => {
      console.log('after 3000s run taskC')
    },
  },
  {
    time: 5000,
    fn: () => {
      console.log('after 5000s run taskD')
    },
  },
])
