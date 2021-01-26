function push(array, elem) {
  var copy = array.slice();
  copy.push(elem);
  return copy;
}