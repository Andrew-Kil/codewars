// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

function meeting(s) {
  return s
    .split(";")
    .sort((a, b) => {
      if (a.toUpperCase().split(":")[1] === b.toUpperCase().split(":")[1]) {
        if (a.toUpperCase().split(":")[0] < b.toUpperCase().split(":")[0]) {
          return -1;
        } else if (
          a.toUpperCase().split(":")[0] > b.toUpperCase().split(":")[0]
        ) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a.toUpperCase().split(":")[1] < b.toUpperCase().split(":")[1]) {
          return -1;
        } else if (
          a.toUpperCase().split(":")[1] > b.toUpperCase().split(":")[1]
        ) {
          return 1;
        } else {
          return 0;
        }
      }
    })
    .reduce((acc, cur) => {
      return (acc += `(${cur.split(":")[1].toUpperCase()}, ${cur
        .split(":")[0]
        .toUpperCase()})`);
    }, "");
}
