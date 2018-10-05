/* Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
each taken only once - coming from s1 or s2.
#Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ``` */
function longest(s1, s2) {
  let s3 = s1.split("").concat(s2.split("")),
    arr1 = [];
  for (let i = 0; i < s3.length; i++) {
    if (arr1.indexOf(s3[i]) === -1) arr1.push(s3[i]);
  }
  return arr1.sort().join("");
}
