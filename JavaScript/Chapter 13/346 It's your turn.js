/// It's your turn

var recommendations = [{name: "Jane", position: "catcher"},
                       {name: "John", position: "pitcher"}];

/// Answer

var evaluations = map(recommendations, function(rec) {
  return objectSet(rec, 'score', scorePlayer(rec.name, rec.position));
});