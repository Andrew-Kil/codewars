// https://www.codewars.com/kata/are-they-the-same/train/javascript

const comp = (a, b) => {
  if (!a || !b) return false;
  let c = a.map(num => Math.pow(num, 2));
  b = b.sort();
  c = c.sort();
  for (let i = 0; i < c.length; i++) {
    if (b[i] !== c[i]) return false;
  }
  return true;
};
