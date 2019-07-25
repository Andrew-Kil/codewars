// https://www.codewars.com/kata/split-strings/train/javascript

const solution = str => {
  let pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    pairs.push(str.slice(i, i + 2));
  }
  if (pairs[pairs.length - 1].length === 1) {
    pairs[pairs.length - 1] += "_";
  }
  return pairs;
};
