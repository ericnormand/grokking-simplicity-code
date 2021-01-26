/// It's your turn

var increment = makeAdder(1);
var plus10 = makeAdder(10);

/// Answer

function makeAdder(n) {
  return function(x) {
    return n + x;
  };
}