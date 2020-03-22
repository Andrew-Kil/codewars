// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const zero = operation => calculate(0, operation);
const one = operation => calculate(1, operation);
const two = operation => calculate(2, operation);
const three = operation => calculate(3, operation);
const four = operation => calculate(4, operation);
const five = operation => calculate(5, operation);
const six = operation => calculate(6, operation);
const seven = operation => calculate(7, operation);
const eight = operation => calculate(8, operation);
const nine = operation => calculate(9, operation);

const plus = a => b => b + a;
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => Math.floor(b / a);

const calculate = (number, operation) =>
  operation ? operation(number) : number;
