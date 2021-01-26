/// Globally defined

function greet(name) {
  return "Hello, " + name;
}

var friendGreetings = map(friendsNames, greet);

/// Locally defined

function greetEverybody(friends) {
  var greeting;
  if(language === "English")
    greeting = "Hello, ";
  else
    greeting = "Salut, ";
  var greet = function(name) {
    return greeting + name;
  };
  return map(friends, greet);
}

/// Defined inline

var friendGreetings = map(friendsNames, function(name) {
  return "Hello, " + name;
});