function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}