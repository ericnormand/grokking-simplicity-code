/// Before refactoring

function incrementField(item, field) {
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

/// After refactoring

function incrementField(item, field) {
  return update(item, field, function(value) {
    return value + 1;
  });
}

/// Step 1: Identify get, modify, set

function halveField(item, field) {
  var value = item[field];
  var newValue = value / 2;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

/// Step 2: Replace with call to update()

function halveField(item, field) {
  return update(item, field, function(value) {
    return value / 2;
  });
}