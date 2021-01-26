// Page 275

/// Original code

saveUserData(user);

fetchProduct(productId);

/// Code with superpowers

try {
  saveUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

try {
  fetchProduct(productId);
} catch (error) {
  logToSnapErrors(error);
}

// Page 276

function withLogging(f) {
  try {
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}

withLogging(function() {
  saveUserData(user);
});

withLogging(function() {
  fetchProduct(productID);
});

// Page 277

/// Original

try {
  saveUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

try {
  fetchProduct(productId);
} catch (error) {
  logToSnapErrors(error);
}

/// Clearer names

try {
  saveUserDataNoLogging(user);
} catch (error) {
  logToSnapErrors(error);
}

try {
  fetchProductNoLogging(productId);
} catch (error) {
  logToSnapErrors(error);
}

/// Functions that do logging

function saveUserDataWithLogging(user) {
  try {
    saveUserDataNoLogging(user);
  } catch (error) {
    logToSnapErrors(error);
  }
}

function fetchProductWithLogging(productId) {
  try {
    fetchProductNoLogging(productId);
  } catch (error) {
    logToSnapErrors(error);
  }
}

// Page 278

function(arg) {
  try {
    saveUserDataNoLogging(arg);
  } catch (error) {
    logToSnapErrors(error);
  }
}

function(arg) {
  try {
    fetchProductNoLogging(arg);
  } catch (error) {
    logToSnapErrors(error);
  }
}

function wrapLogging(f) {
  return function(arg) {
    try {
      f(arg);
    } catch (error) {
      logToSnapErrors(error);
    }
  }
}

var saveUserDataWithLogging = wrapLogging(saveUserDataNoLogging);
var saveUserDataWithLogging = wrapLogging(saveUserDataNoLogging);
var fetchProductWithLogging = wrapLogging(fetchProductNoLogging);