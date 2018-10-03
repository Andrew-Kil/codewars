/* Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that */
var humanYearsCatYearsDogYears = function(humanYears) {
  let hYears = humanYears,
    cYears = 0,
    dYears = 0,
    answerArray = [];
  if (hYears === 1) {
    cYears += 15;
    dYears += 15;
  } else if (hYears === 2) {
    cYears += 15 + 9;
    dYears += 15 + 9;
  } else if (hYears > 2) {
    cYears += 15 + 9 + 4 * (hYears - 2);
    dYears += 15 + 9 + 5 * (hYears - 2);
  }
  answerArray.push(hYears, cYears, dYears);
  return answerArray;
};
