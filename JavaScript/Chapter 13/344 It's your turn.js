/// It's your turn

var evaluations = [{name: "Jane",  position: "catcher", score: 25},
                   {name: "John",  position: "pitcher", score: 10},
                   {name: "Harry", position: "pitcher", score: 3}];

var roster = {"pitcher": "John",
              "catcher": "Jane",
              "first base": "Ellen"};

/// Answer

var roster = reduce(evaluations, {}, function(roster, eval) {
  var position = eval.position;
  if(roster[position]) // already filled the position
    return roster; // so do nothing
  return objectSet(roster, position, eval.name);
});