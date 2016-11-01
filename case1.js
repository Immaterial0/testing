function case1(n) {
  var array = [];
  var result = 0;
  for (var i = 1; i < n; i ++) {
    if (i % 3 == 0 || i % 5 == 0) {
      array.push(i);
    }
  }
  for (var num of array) {
    result += num;
  }
  return result;
}

module.exports = case1;