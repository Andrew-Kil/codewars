// https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

const expandedForm = num => {
  const strNum = `${num}`;
  let arr = [];
  let ans = "";
  for (let inc = 1, i = strNum.length - 1; i >= 0; i--) {
    if (strNum[i] * inc) arr.push(strNum[i] * inc);
    inc = +`${inc}0`;
  }
  arr = arr.reverse();
  for (let j = 0; j < arr.length; j++) {
    j !== arr.length - 1 ? (ans += `${arr[j]} + `) : (ans += `${arr[j]}`);
  }
  return ans;
};
