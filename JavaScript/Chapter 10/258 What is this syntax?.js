withLogging(function() { saveUserData(user); });

/// 1. Globally defined

function saveCurrentUserData() {
  saveUserData(user);
}

withLogging(saveCurrentUserData);

/// 2. Locally defined

function someFunction() {
  var saveCurrentUserData = function() {
    saveUserData(user);
  };
  withLogging(saveCurrentUserData);
}

/// 3. Defined inline

withLogging(function() { saveUserData(user); });