var min = function(list) {
  let funcName = function(a, b) {
    return a - b;
  };
  list.sort(funcName);

  return list[0];
};

var max = function(list) {
  let funcName2 = function(a, b) {
    return b - a;
  };
  list.sort(funcName2);

  return list[0];
};
