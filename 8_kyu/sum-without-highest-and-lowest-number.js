function sumArray(array) {
  if (array === null || array.length < 2) {
    return 0;
  }
  array = array.sort(function(a, b) {
    return a - b;
  });
  let finalSum = 0;
  for (let i = 1; i < array.length - 1; i++) {
    finalSum += array[i];
  }
  return finalSum;
}
