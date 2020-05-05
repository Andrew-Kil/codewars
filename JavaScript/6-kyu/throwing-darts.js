// https://www.codewars.com/kata/525dfedb5b62f6954d000006/train/javascript

// You've just recently been hired to calculate scores for a Dart Board game!

// Scoring specifications:

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5
// If all radii are less than 5, award 100 BONUS POINTS!

// Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

// An empty array should return 0.

// Examples:
// scoreThrows( [1, 5, 11] )    =>  15
// scoreThrows( [15, 20, 30] )  =>  0
// scoreThrows( [1, 2, 3, 4] )  =>  140

const scoreThrows = (radii) => {
  if (radii.length === 0) return 0;
  let total = radii.reduce((acc, curr) => {
    let points;
    if (curr > 10) points = 0;
    if (curr >= 5 && curr <= 10) points = 5;
    if (curr < 5) points = 10;
    return acc + points;
  }, 0);
  if (radii.filter((el) => el < 5).length === radii.length) total += 100;
  return total;
};
