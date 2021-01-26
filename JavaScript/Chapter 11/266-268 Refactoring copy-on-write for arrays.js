// Page 266

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

/// After function extraction

function arraySet(array, idx, value) {
  return withArrayCopy(array);
}

function withArrayCopy(array) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

// Page 267

/// After extracting callback

function arraySet(array, idx, value) {
  return withArrayCopy(array, function(copy) {
    copy[idx] = value;
  });
}

function withArrayCopy(array, modify) {
  var copy = array.slice();
  modify(copy);
  return copy;
}

// Page 268

var sortedArray = withArrayCopy(array, function(copy) {
  SuperSorter.sort(copy);
});

/// Makes intermediate copies

var a1 = drop_first(array);
var a2 = push(a1, 10);
var a3 = push(a2, 11);
var a4 = arraySet(a3, 0, 42);

/// Makes one copy

var a4 = withArrayCopy(array, function(copy) {
  copy.shift();
  copy.push(10);
  copy.push(11);
  copy[0] = 42;
});