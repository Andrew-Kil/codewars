// Get the number n (n>0) to return the reversed sequence from n to 1.

const reverseSeq = n => {
  let finalArray = [];
  for (let i = n; i >= 1; i--) {
    finalArray.push(i);
  }
  return finalArray;
};
