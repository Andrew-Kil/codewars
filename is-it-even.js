/* In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats are considered UNeven for this kata. */
function testEven(n) {
  if (n % 2 === 0) {
    return true;
  } else if (n % 2 === 1) {
    return false;
  } else {
    return false;
  }
}
