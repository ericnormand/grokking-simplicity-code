function Cut(num, callback) {
  var num_finished = 0;
  return function() {
    num_finished += 1;
    if(num_finished === num)
      callback();
  };
}

var done = Cut(3, function() {
  console.log("3 timelines are finished");
});
  
done();
done();
done();