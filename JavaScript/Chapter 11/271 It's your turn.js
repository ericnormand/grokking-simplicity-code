/// It's your turn

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function objectDelete(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

/// Answer

function withObjectCopy(object, modify) {
  var copy = Object.assign({}, object);
  modify(copy);
  return copy;
}

function objectSet(object, key, value) {
  return withObjectCopy(object, function(copy) {
    copy[key] = value;
  });
}

function objectDelete(object, key) {
  return withObjectCopy(object, function(copy) {
    delete copy[key];
  });
}