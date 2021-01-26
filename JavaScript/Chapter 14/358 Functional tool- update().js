function update(object, key, modify) {
  var value = object[key];
  var newValue = modify(value);
  var newObject = objectSet(object, key, newValue);
  return newObject;
}

function incrementField(item, field) {
  return update(item, field, function(value) {
    return value + 1;
  });
}