// https://www.codewars.com/kata/create-phone-number/train/javascript

const createPhoneNumber = numbers => {
  let partOne = [numbers[0], numbers[1], numbers[2]].join(""),
    partTwo = [numbers[3], numbers[4], numbers[5]].join(""),
    partThree = [numbers[6], numbers[7], numbers[8], numbers[9]].join("");
  partOne = `(${partOne}) `;
  partTwo = `${partTwo}-`;
  return partOne + partTwo + partThree;
};
