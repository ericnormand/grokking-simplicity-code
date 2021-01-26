var answer = [];
var window = 5;

for(var i = 0; i < array.length; i++) {
  var subarray = array.slice(i, i + window);
  answer.push(average(subarray));
}

/// in small steps

var indices = [];

for(var i = 0; i < array.length; i++)
  indices.push(i);

var window = 5;
var answer = map(indices, function(i) {
  var subarray = array.slice(i, i + window);
  return average(subarray);
});