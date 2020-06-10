// https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

// Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

// Assume: 0 <= n < 2147483647

// Examples
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"

const groupByCommas = (n) => {
  const m = [...`${n}`].reverse();
  return m.reduce(
    (acc, cur, idx) =>
      (idx + 1) % 3 === 0 && idx !== m.length - 1
        ? `,${cur}${acc}`
        : `${cur}${acc}`,
    ""
  );
};
