// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

// Task Overview
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor ('cause of superstition).

// Write a function that given an American floor (passed as an integer) returns the real floor.
// Moreover, your function should work for basement floors too: just return the same value as the passed one.

// Usage Examples
// getRealFloor(1) == 0
// getRealFloor(0) == 0 // Special case to please Europeans
// getRealFloor(5) == 4
// getRealFloor(15) == 13
// getRealFloor(-3) == -3

const getRealFloor = n => (n === 0 ? 0 : n < 0 ? n : n >= 13 ? n - 2 : n - 1);
