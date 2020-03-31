//www.codewars.com/kata/count-the-smiley-faces/train/javascript

// Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
// Happy coding!

const countSmileys = arr => {
  let count = 0;
  const eyes = [":", ";"],
    nose = ["-", "~"],
    mouth = [")", "D"];
  const hasEyesAndMouth = face =>
    eyes.includes(face[0]) && mouth.includes(face[1]);
  const hasEyesAndNoseAndMouth = face =>
    eyes.includes(face[0]) && nose.includes(face[1]) && mouth.includes(face[2]);
  arr.forEach(face => {
    if (hasEyesAndMouth(face) || hasEyesAndNoseAndMouth(face)) {
      count++;
    }
  });
  return count;
};
