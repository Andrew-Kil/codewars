// https://www.codewars.com/kata/total-amount-of-points/train/javascript

const points = games => {
  let score = 0;
  games.map(game => {
    if (game[0] === game[2]) score += 1;
    else if (game[0] > game[2]) score += 3;
  });
  return score;
};
