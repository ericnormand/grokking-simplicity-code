userChanges.subscribe(function(user) {
  var userCopy = deepCopy(user);
  procssUser(userCopy);
});