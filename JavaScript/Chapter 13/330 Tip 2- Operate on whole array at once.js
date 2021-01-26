var answer = [];
var window = 5;

for(var i = 0; i < array.length; i++) {
  var sum = 0;
  var count = 0;
  var subarray = array.slice(i, i + window);
  for(var w = 0; w < subarray.length; w++) {
    sum += subarray[w];
    count += 1;
  }
  answer.push(sum/count);
}

/// Using average

var answer = [];
var window = 5;

for(var i = 0; i < array.length; i++) {
  var subarray = array.slice(i, i + window);
  answer.push(average(subarray));
}