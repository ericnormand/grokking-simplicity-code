function incrementField(item, field) {
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

/// Extracted

function incrementField(item, field) {
  return updateField(item, field, function(value) {
  return value + 1;
  });
}

function updateField(item, field, modify) {
  var value = item[field];
  var newValue = modify(value);
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

/// Called update()

function update(object, key, modify) {
  var value = object[key];
  var newValue = modify(value);
  var newObject = objectSet(object, key, newValue);
  return newObject;
}