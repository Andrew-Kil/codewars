// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript
const isValidWalk = walk => {
  const news = { n: 0, e: 0, w: 0, s: 0 };
  walk.forEach(el => news[el]++);
  return walk.length === 10 && (news.n === news.s && news.e === news.w);
};
