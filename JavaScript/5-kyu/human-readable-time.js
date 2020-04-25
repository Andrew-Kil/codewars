// https://www.codewars.com/kata/human-readable-time/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

const humanReadable = s => {
  let m = 0,
    h = 0;
  if (s >= 3600) {
    h = Math.floor(s / 3600);
    s = s - 3600 * h;
  }
  if (s >= 60) {
    m = Math.floor(s / 60);
    s = s - 60 * m;
  }
  h = h < 10 ? `0${h}` : `${h}`;
  m = m < 10 ? `0${m}` : `${m}`;
  s = s < 10 ? `0${s}` : `${s}`;
  return `${h}:${m}:${s.toString()}`;
};
