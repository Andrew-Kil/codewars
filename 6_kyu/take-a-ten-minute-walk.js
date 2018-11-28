// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript
const isValidWalk = walk => {
  let [n, s, e, w] = [0, 0, 0, 0];
  walk.forEach(el => {
    if (el === "n") n++;
    else if (el === "s") s++;
    else if (el === "e") e++;
    else if (el === "w") w++;
  });
  if (walk.length === 10 && (n === s && e === w)) return true;
  else return false;
};
