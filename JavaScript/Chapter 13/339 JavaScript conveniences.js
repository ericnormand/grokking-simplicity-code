/// This book's implementation

var customerNames = map(customers, function(c) {
  return c.firstName + " " + c.lastName;
});

/// JavaScript's built-in tools

var customerNames = customers.map(function(c) {
  return c.firstName + " " + c.lastName;
});

/// This book's implementation

var window = 5;
var indices = range(0, array.length);
var windows = map(indices, function(i) {
  return array.slice(i, i + window);
});
var answer = map(windows, average);

/// With method chaining

var window = 5;
var answer = range(0, array.length)
              .map(function(i) {
                return array.slice(i, i + window);
              })
              .map(average);

/// With ES6 arrow functions

var window = 5;
var answer = range(0, array.length)
              .map(i => array.slice(i, i + window))
              .map(average);

/// Using map() and filter()'s second argument

var window = 5;
var average = array => array.reduce((sum, e) => sum + e, 0) / array.length;
var answer = array.map((e, i) => array.slice(i, i + window)).map(average);