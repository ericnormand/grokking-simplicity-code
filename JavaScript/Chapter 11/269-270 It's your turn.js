// Page 269 It's your turn

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

function push(array, elem) {
  var copy = array.slice();
  copy.push(elem);
  return copy;
}

function drop_last(array) {
  var array_copy = array.slice();
  array_copy.pop();
  return array_copy;
}

function drop_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

// Page 270 Answer

function arraySet(array, idx, value) {
  return withArrayCopy(array, function(copy) {
    copy[idx] = value;
  });
}

function arraySet(array, idx, value) {
  return withArrayCopy(array, function(copy) {
    copy[idx] = value;
  });
}

function drop_last(array) {
  return withArrayCopy(array, function(copy) {
    copy.pop();
  });
}

function drop_first(array) {
  return withArrayCopy(array, function(copy) {
    copy.shift();
  });
}