// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
function sumTwoSmallestNumbers(numbers) {
  let sortedArray = numbers.sort(function(a, b) {
    return a - b;
  });
  return sortedArray[0] + sortedArray[1];
}
