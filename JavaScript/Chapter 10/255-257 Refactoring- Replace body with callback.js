// Page 255

try {
  saveUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

// Page 256

try {
  fetchProduct(productId);
} catch (error) {
  logToSnapErrors(error);
}

// Page 257

/// After function extraction

function withLogging() {
  try {
    saveUserData(user);
  } catch (error) {
    logToSnapErrors(error);
  }
}

withLogging();

/// After extracting callback

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