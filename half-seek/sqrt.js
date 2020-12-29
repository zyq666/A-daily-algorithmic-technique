const sqrt = (num) => {
  let n = 10;
  while (Math.pow(n, 2) - num > 1e-6) {
    console.log(n);
    n = (Math.pow(n, 2) + num) / 2 / n;
  }
  return Math.floor(n * 1e6) * 1e-6
}

console.log(Math.sqrt(12), sqrt(12));
