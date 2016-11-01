function case2(N) {
  var threes = Math.floor(--N / 3);
  var fives = Math.floor(N / 5);
  var fifteen = Math.floor(N / 15);
  
  return (3 * threes * (threes + 1) + 5 * fives * (fives + 1) - 15 * fifteen * (fifteen + 1)) / 2;
}

module.exports = case2;