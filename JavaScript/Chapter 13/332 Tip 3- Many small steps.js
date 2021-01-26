var indices = [];

for(var i = 0; i < array.length; i++)
  indices.push(i);

var window = 5;
var answer = map(indices, function(i) {
  var subarray = array.slice(i, i + window);
  return average(subarray);
});

/// in two steps

var indices = [];

for(var i = 0; i < array.length; i++)
  indices.push(i);

var window = 5;

var windows = map(indices, function(i) {
  return array.slice(i, i + window);
});

var answer = map(windows, average);

/// wrap loop in function

function range(start, end) {
  var ret = [];
  for(var i = start; i < end; i++)
    ret.push(i);
  return ret;
}

var window = 5;

var indices = range(0, array.length);

var windows = map(indices, function(i) {
  return array.slice(i, i + window);
});

var answer = map(windows, average);