// https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript

const countSheep = num => {
  let count = 1;
  let ans = "";
  while (count <= num) {
    ans += `${count} sheep...`;
    count++;
  }
  return ans;
};
