/// It's your turn

var employeeNames = ["John", "Harry", "Jane"];

/// Answer

var recommendations = map(employeeNames, function(name) {
  return {
    name: name,
    position: recommendPosition(name)
  };
});