// https://www.codewars.com/kata/printer-errors/train/javascript

const printerError = s => {
  let numerator = 0;
  let denominator = s.length;

  const validColors = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m"
  ];

  const arrS = Array.from(s);

  let answer = "";

  for (let i = 0; i < arrS.length; i++) {
    if (!validColors.includes(arrS[i])) {
      numerator++;
    }
  }

  answer = numerator + "/" + denominator;
  return answer;
};
