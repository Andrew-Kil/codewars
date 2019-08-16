//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  let splitX = x.split("");
  let finalX = [];

  for (let i = 0; i < splitX.length; i++) {
    if (splitX[i] < 5) {
      finalX.push(0);
    } else if (splitX[i] >= 5) {
      finalX.push(1);
    }
  }
  return finalX.join("");
}
