//www.codewars.com/kata/sleigh-authentication/train/javascript

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  } else return false;
};
