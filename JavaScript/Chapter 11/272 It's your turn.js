/// It's your turn

tryCatch(sendEmail, logToSnapErrors)

try {
  sendEmail();
} catch(error) {
  logToSnapErrors(error);
}

/// Answer

function tryCatch(f, errorHandler) {
  try {
    return f();
  } catch(error) {
    return errorHandler(error);
  }
}