// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

const isValidOctet = oct => oct === `${+oct}` && +oct <= 255 && +oct >= 0;

const isValidIP = str =>
  str.split(".").filter(oct => isValidOctet(oct)).length === 4;
