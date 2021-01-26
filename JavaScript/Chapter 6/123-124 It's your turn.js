// Page 123 It's your turn

var a = [1, 2, 3, 4];
var b = a.pop();
console.log(b); // prints 4
console.log(a); // prints [1, 2, 3]

// Page 124 Answer

/// 1. Split the read and write into two operations

function last_element(array) {
  return array[array.length - 1];
}

function drop_last(array) {
  array.pop();
}

//// Copy-on-write

function drop_last(array) {
  var array_copy = array.slice();
  array_copy.pop();
  return array_copy;
}

/// 2. Return two values

function pop(array) {
  return array.pop();
}

//// Copy-on-write

function pop(array) {
  var array_copy = array.slice();
  var first = array_copy.pop();
  return {
    first : first,
    array : array_copy
  };
}