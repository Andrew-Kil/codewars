/* Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.  */
String.prototype.toAlternatingCase = function() {
  let splitString = this.split(""),
    ansArr = [];
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === splitString[i].toUpperCase()) {
      ansArr.push(splitString[i].toLowerCase());
    } else {
      ansArr.push(splitString[i].toUpperCase());
    }
  }
  return ansArr.join("");
};
