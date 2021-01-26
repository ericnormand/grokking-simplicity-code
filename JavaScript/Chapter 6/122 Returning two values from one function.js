function shift(array) {
  return array.shift();
}

/// Copy-on-write

function shift(array) {
  var array_copy = array.slice();
  var first = array_copy.shift();
  return {
    first : first,
    array : array_copy
  };
}

/// Another option

function shift(array) {
  return {
    first : first_element(array),
    array : drop_first(array)
  };
}