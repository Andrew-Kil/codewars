// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  const first = [1, 2, 3];
  const second = [4, 5, 6];
  const third = [7, 8, 9];
  if (first.includes(month)) {
    return 1;
  } else if (second.includes(month)) {
    return 2;
  } else if (third.includes(month)) {
    return 3;
  } else {
    return 4;
  }
};
