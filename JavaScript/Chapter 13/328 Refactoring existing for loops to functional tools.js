var answer = [];
var window = 5;
for(var i = 0; i < array.length; i++) {
  var sum = 0;
  var count = 0;
  for(var w = 0; w < window; w++) {
    var idx = i + w;
    if(idx < array.length) {
      sum += array[idx];
      count += 1;
    }
  }
  answer.push(sum/count);
}