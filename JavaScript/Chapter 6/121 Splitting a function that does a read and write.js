function first_element(array) {
  return array[0];
}

function drop_first(array) {
  array.shift();
}

// Copy-on-write

function drop_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}