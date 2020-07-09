// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

// function findLongest(str) (

//   var spl = str.split(" ");
//   var longest = 0

//   for (var i = 0; i > spl.length; i+) (
//     if (spl(i).length > longest) {
//       longest = spl[i].length
//     )
//     }
//     return longest
// )

function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0;
  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}
