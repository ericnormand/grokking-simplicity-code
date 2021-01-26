function updateOption(item, option, modify) {
  return update(item, 'options', function(options) {
    return update(options, option, modify);
  });
}

/// With explicit argument

function update2(object, key1, key2, modify) {
  return update(object, key1, function(value1) {
    return update(value1, key2, modify);
  });
}

/// Original

function incrementSize(item) {
  var options = item.options;
  var size = options.size;
  var newSize = size + 1;
  var newOptions = objectSet(options, 'size', newSize);
  var newItem = objectSet(item, 'options', newOptions);
  return newItem;
}

/// Using update2()

function incrementSize(item) {
  return update2(item, 'options', 'size', function(size) {
    return size + 1;
  });
}