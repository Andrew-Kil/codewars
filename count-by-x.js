function countBy(x, n) {
  let finalArr = [];

  for(let i = x; i <= x * n; i = i + x) {
    finalArr.push(i);
  }

  return finalArr;
}
