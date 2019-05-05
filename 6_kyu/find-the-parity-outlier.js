// https://www.codewars.com/kata/find-the-parity-outlier/train/javascript

const findOutlier = ints => {
  let evens = [];
  let odds = [];
  ints.filter(int => (int % 2 ? odds.push(int) : evens.push(int)));
  if (odds.length === 1) return odds[0];
  else return evens[0];
};
