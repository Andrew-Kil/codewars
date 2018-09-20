/* You are given two angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested. */
function otherAngle(a, b) {
  let sum = a + b;
  return 180 - sum;
}
