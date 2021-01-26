function min(numbers) {
  return reduce(numbers, Number.MAX_VALUE, function(m, n) {
    if(m < n) return m;
    else return n;
  });
}

function max(numbers) {
  return reduce(numbers, Number.MIN_VALUE, function(m, n) {
    if(m > n) return m;
    else return n;
  });
}