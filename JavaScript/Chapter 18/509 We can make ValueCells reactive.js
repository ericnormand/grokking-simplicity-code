/// Original

function ValueCell(initialValue) {
  var currentValue = initialValue;
  return {
    val: function() {
      return currentValue;
    },
    update: function(f) {
      var oldValue = currentValue;
      var newValue = f(oldValue);
      currentValue = newValue;
    }
  };
}

/// With watchers

function ValueCell(initialValue) {
  var currentValue = initialValue;
  var watchers = [];
  return {
    val: function() {
      return currentValue;
    },
    update: function(f) {
      var oldValue = currentValue;
      var newValue = f(oldValue);
      if(oldValue !== newValue) {
        currentValue = newValue;
        forEach(watchers, function(watcher) {
          watcher(newValue);
        });
      }
    },
    addWatcher: function(f) {
      watchers.push(f);
    }
  };
}