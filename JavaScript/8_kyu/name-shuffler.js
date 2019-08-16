// Write a function that returns a string in which firstname is swapped with last name.
// nameShuffler('john McClane'); => "McClane john"
const nameShuffler = str => {
  let splitStr = str.split(" "),
    firstName = splitStr[0],
    lastName = splitStr[1];
  return `${lastName} ${firstName}`;
};
