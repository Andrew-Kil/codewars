// https://www.codewars.com/kata/5269452810342858ec000951/train/javascript

// You need to create a function that will validate if given parameters are valid geographical coordinates.

// Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

// Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

// Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

// There should be no space between the minus "-" sign and the digit after it.

// Here are some valid coordinates:

// -23, 25
// 24.53525235, 23.45235
// 04, -23.234235
// 43.91343345, 143
// 4, -3
// And some invalid ones:

// 23.234, - 23.4234
// 2342.43536, 34.324236
// N23.43345, E32.6457
// 99.234, 12.324
// 6.325624, 43.34345.345
// 0, 1,2
// 0.342q0832, 1.2324

const isValidCoordinates = (coordinates) => {
  const lat = coordinates.split(",")[0];
  const long = coordinates.split(",")[1].slice(1);
  return coordinates.split(",").length > 2 ||
    !isValid(lat, "lat") ||
    !isValid(long, "long") ||
    !isDigitOrSpecChar(lat) ||
    !isDigitOrSpecChar(long)
    ? false
    : true;
};

const isValid = (coordinate, type) => {
  if (type === "lat") {
    return Math.abs(coordinate) >= 0 && Math.abs(coordinate) <= 90
      ? true
      : false;
  } else {
    return Math.abs(coordinate) >= 0 && Math.abs(coordinate) <= 180
      ? true
      : false;
  }
};

const isDigitOrSpecChar = (str) => {
  const allowed = [
    "-",
    ",",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  for (let char of [...str]) {
    if (!allowed.includes(char) || char === " ") {
      return false;
    }
  }
  return true;
};
