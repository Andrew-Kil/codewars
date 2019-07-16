// https://www.codewars.com/kata/remove-anchor-from-url/train/javascript

const removeUrlAnchor = url => {
  let idx;
  for (let i = 0; i < url.length; i++) {
    url[i] === "#" ? (idx = i) : "";
  }
  return url.slice(0, idx);
};
