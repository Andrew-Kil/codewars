function countPositivesSumNegatives(input) {
  let numOfPos = 0;
  let sumOfNeg = 0;
  let finalArr = [];
  if (input === null || input.length < 1) {
    /* if it was input.length < 1 || input === null, it would not work
    learned about the importance of the order when using || + && operators
    */
    return finalArr;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      numOfPos += 1;
    } else if (input[i] < 0) {
      sumOfNeg += input[i];
    } else if (input[i] === 0) {
      numOfPos += 0;
    }
  }
  let arrLength = finalArr.push(numOfPos, sumOfNeg);
  return finalArr;
}
