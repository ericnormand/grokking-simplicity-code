function incrementSize(item) {
  return update(item, 'options', function(options) {
    return update(options, 'size', increment);
  });
}

/// With explicit option argument

function incrementOption(item, option) {
  return update(item, 'options', function(options) {
    return update(options, option, increment);
  });
}

/// With explicit modify argument

function updateOption(item, option, modify) {
  return update(item, 'options', function(options) {
    return update(options, option, modify);
  });
}