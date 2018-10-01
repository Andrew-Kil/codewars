/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot seperating them.
It should look like this:
Sam Harris => S.H
Patrick Feeney => P.F */
function abbrevName(name) {
  let splitName = name.split(" ");
  let firstInitial = "";
  let secondInitial = "";
  firstInitial = splitName[0].charAt(0);
  secondInitial = splitName[1].charAt(0);
  return firstInitial + "." + secondInitial;
}
