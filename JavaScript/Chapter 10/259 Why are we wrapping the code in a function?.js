function withLogging(f) {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}

withLogging(function() { saveUserData(user); });

var f = function() {
  saveUserData(user);
}

/// Name it

var f = function() {
  saveUserData(user);
};

/// Collect it

array.push(function() {
  saveUserData(user);
});

/// Pass it

withLogging(function() {
  saveUserData(user);
});

/// Choose not to call it

function callOnThursday(f) {
  if(today === "Thursday")
    f();
}

/// Call it later

function callTomorrow(f) {
  sleep(oneDay);
  f();
}

/// Call it in a new context

function withLogging(f) {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}