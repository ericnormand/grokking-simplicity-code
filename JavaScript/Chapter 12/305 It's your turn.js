function sum(numbers) {
  return reduce(numbers, 0, function(total, num) {
    return total + num;
  });
}

function product(numbers) {
  return reduce(numbers, 1, function(total, num) {
    return total * num;
  });
}