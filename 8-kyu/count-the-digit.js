// https://www.codewars.com/kata/count-the-digit/train/javascript

const nbDig = (n, d) => {
  const k = [];
  let count = 0;
  for (let i = 0; i <= n; i++) {
    k.push(Math.pow(i, 2));
  }
  k.forEach(num => {
    if (`${num}`.includes(`${d}`)) {
      [...`${num}`].forEach(digit => {
        if (digit === `${d}`) count++;
      });
    }
  });
  return count;
};
