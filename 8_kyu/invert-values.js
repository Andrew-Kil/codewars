function invert(array) {
  let finalArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      finalArr.push(array[i] * -1);
    } else if (array[i] < 0) {
      finalArr.push(array[i] * -1);
    } else if (array[i] === 0) {
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}
