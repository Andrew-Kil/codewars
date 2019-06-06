// https://www.codewars.com/kata/counting-duplicates/train/javascript

const duplicateCount = text => {
  let newText = text.toLowerCase().split("");
  let ans = {};
  let count = 0;
  for (let char of newText) {
    ans[char] ? ans[char]++ : (ans[char] = 1);
  }
  for (let key in ans) {
    if (ans[key] >= 2) count++;
  }
  return count;
};
