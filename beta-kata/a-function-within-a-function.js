// https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript

// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

// var three = always(3);
// three(); // returns 3

const always = n => () => n;
