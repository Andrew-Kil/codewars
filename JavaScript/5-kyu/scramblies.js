// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scramble = (str1, str2) => {
  const letters = {};
  for (let s of str1) {
    letters[s] = (letters[s] || 0) + 1;
  }
  for (let s of str2) {
    if (letters[s]) letters[s]--;
    else return false;
  }
  return true;
};
