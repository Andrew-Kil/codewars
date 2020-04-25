// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Examples:

// validPhoneNumber("(123) 456-7890")  =>  returns true
// validPhoneNumber("(1111)555 2345")  => returns false
// validPhoneNumber("(098) 123 4567")  => returns false

const validPhoneNumber = phoneNumber => {
  if (!checkFormat(phoneNumber)) return false;
  const validNums = [...Array(10).keys()].map(num => `${num}`);
  const nums = [
    ...(phoneNumber.slice(1, 4) +
      phoneNumber.slice(6, 9) +
      phoneNumber.slice(10))
  ];
  return nums.filter(n => validNums.includes(n)).length === nums.length;
};

const checkFormat = phoneNumber =>
  phoneNumber[0] !== "(" ||
  phoneNumber[4] !== ")" ||
  phoneNumber[5] !== " " ||
  phoneNumber[9] !== "-"
    ? false
    : true;
