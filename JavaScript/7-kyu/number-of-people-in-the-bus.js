// https://www.codewars.com/kata/number-of-people-in-the-bus/train/javascript

let number = function(busStops) {
  let getOn = 0;
  let getOff = 0;

  for (let stop of busStops) {
    getOn += stop[0];
    getOff += stop[1];
  }

  return getOn - getOff;
};
