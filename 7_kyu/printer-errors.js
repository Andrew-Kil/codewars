// https://www.codewars.com/kata/printer-errors/train/javascript

const printerError = s => {
  let numerator = 0;
  const denominator = s.length;
  const arrS = Array.from(s);
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

  for (let i = 0; i < arrS.length; i++) {
    if (!validColors.includes(arrS[i])) {
      numerator++;
    }
  }

  return numerator + "/" + denominator;
};
