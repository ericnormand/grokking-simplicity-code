function withLogging(data) {
  try {
    data;
  } catch (error) {
    logToSnapErrors(error);
  }
}

withLogging(saveUserData(user));