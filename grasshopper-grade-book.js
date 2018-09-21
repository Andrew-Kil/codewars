/* Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100. */
function getGrade(s1, s2, s3) {
  let sum = (s1 + s2 + s3) / 3;
  if (sum >= 90 && sum <= 100) {
    return "A";
  } else if (sum >= 80 && sum < 90) {
    return "B";
  } else if (sum >= 70 && sum < 80) {
    return "C";
  } else if (sum >= 60 && sum < 70) {
    return "D";
  } else if (sum >= 0 && sum < 60) {
    return "F";
  }
}
