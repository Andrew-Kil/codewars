// https://www.codewars.com/kata/sort-and-star/train/javascript

const twoSort = s => {
  let ans = "";
  let first = s.sort()[0].split("");
  for (let i = 0; i < first.length; i++) {
    i !== first.length - 1 ? (ans += first[i] + "***") : (ans += first[i]);
  }
  return ans;
};
