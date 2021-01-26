function average(numbers) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a, b) {
  return a + b;
}