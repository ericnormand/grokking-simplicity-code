function incrementSize(item) {
  var options = item.options;
  var size = options.size;
  var newSize = size + 1;
  var newOptions = objectSet(options, 'size', newSize);
  var newItem = objectSet(item, 'options', newOptions);
  return newItem;
}

/// Refactored

function incrementSize(item) {
  var options = item.options;
  var newOptions = update(options, 'size', increment);
  var newItem = objectSet(item, 'options', newOptions);
  return newItem;
}

/// Refactored twice

function incrementSize(item) {
  return update(item, 'options', function(options) {
    return update(options, 'size', increment);
  });
}