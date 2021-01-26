/// Option 2

function incrementSizeByName(cart, name) {
  return update(cart, name, function(item) {
    return update2(item, 'options', 'size', function(size) {
      return size + 1;
    });
  });
}

/// Refactored

function incrementSizeByName(cart, name) {
  return update3(cart, name, 'options', 'size', function(size) { return size + 1; });
}

function update3(object, key1, key2, key3, modify) {
  return update(object, key1, function(object2) {
    return update2(object2, key2, key3, modify);
  });
}