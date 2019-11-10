// https://www.codewars.com/kata/build-tower/train/javascript

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

const towerBuilder = numFloors => {
  let ans = [];
  const numStars = currFloor => currFloor + (currFloor - 1);
  const offset = currFloor => numFloors - currFloor;
  for (let i = 1; i <= numFloors; i++) {
    ans.push(
      " ".repeat(offset(i)) + "*".repeat(numStars(i)) + " ".repeat(offset(i))
    );
  }
  return ans;
};
