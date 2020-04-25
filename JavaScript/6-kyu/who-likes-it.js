// https://www.codewars.com/kata/who-likes-it/train/javascript

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

const likes = names => {
  const likesThis = "likes this";
  const likeThis = "like this";
  if (names.length === 0) {
    return `no one ${likesThis}`;
  } else if (names.length === 1) {
    return `${names[0]} ${likesThis}`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} ${likeThis}`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} ${likeThis}`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length -
      2} others ${likeThis}`;
  }
};
