// https://www.codewars.com/kata/will-there-be-enough-space/train/javascript

const enough = (cap, on, wait, x = on + wait - cap) => (x > 0 ? x : 0);
