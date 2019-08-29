// https://www.codewars.com/kata/are-the-numbers-in-order/train/javascript

const inAscOrder = arr => {
  let ans = true;
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] > arr[i + 1]) return false;
  return ans;
};
