// https://www.codewars.com/kata/sum-mixed-array/train/javascript

const sumMix = x => {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "number") {
      sum += x[i];
    } else if (typeof x[i] === "string") {
      sum += Number(x[i]);
    }
  }
  return sum;
};
