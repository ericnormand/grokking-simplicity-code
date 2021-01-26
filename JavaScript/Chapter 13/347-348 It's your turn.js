// Page 347 It's your turn

var employeeNames = ["John", "Harry", "Jane"];

// Page 348 Answer

var recommendations = map(employeeNames, function(name) {
  return {
    name: name,
    position: recommendPosition(name)
  };
});

var evaluations = map(recommendations, function(rec) {
  return objectSet(rec, 'score', scorePlayer(rec.name, rec.position));
});

var evaluationsAscending = sortBy(evaluations, function(eval) {
  return eval.score;
});

var evaluationsDescending = reverse(evaluationsAscending);

var roster = reduce(evaluations, {}, function(roster, eval) {
  var position = eval.position;
  if(roster[position]) // already filled the position
    return roster; // so do nothing
  return objectSet(roster, position, eval.name);
});