// https://www.codewars.com/kata/586538146b56991861000293/train/javascript

// The idea for this Kata came from 9gag today.here

// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

// Like this:

// ** Input: ** If you can read

// ** Output: ** India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

// ** Some notes **

// Keep the punctuation, and remove the spaces.
// Use Xray without dash or space.

const to_nato = words =>
  [...words.toUpperCase()]
    .filter(c => c !== " ")
    .reduce((acc, curr) => (acc += `${conversion(curr)} `), "")
    .trim();

const conversion = char => (chart[char] ? chart[char] : char);

const chart = {
  A: "Alfa",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliett",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "Xray",
  Y: "Yankee",
  Z: "Zulu"
};
