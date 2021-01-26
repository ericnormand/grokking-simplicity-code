/// It's your turn

try {
  codeThatMightThrow();
} catch(e) {
  // ignore errors by doing nothing
}

/// Answer

function wrapIgnoreErrors(f) {
  return function(a1, a2, a3) {
    try {
      return f(a1, a2, a3);
    } catch(error) { // error is ignored
      return null;
    }
  };
}