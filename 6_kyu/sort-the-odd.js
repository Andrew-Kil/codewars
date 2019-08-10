// https://www.codewars.com/kata/sort-the-odd/train/javascript
const sortArray = arr => {
  const odd = arr.filter(num => num % 2).sort((a, b) => a > b);
  return arr.map(num => (num % 2 ? odd.shift() : num));
};
