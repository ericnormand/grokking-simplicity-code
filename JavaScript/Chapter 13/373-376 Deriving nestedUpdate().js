/// Page 373

function update3(object, key1, key2, key3, modify) {
  return update(object, key1, function(value1) {
    return update2(value1, key2, key3, modify);
  });
}

function update4(object, key1, key2, key3, key4, modify) {
  return update(object, key1, function(value1) {
    return update3(value1, key2, key3, key4, modify);
  });
}

function update2(object, key1, key2, modify) {
  return update(object, key1, function(value1) {
    return update1(value1, key2, modify);
  });
}

function update1(object, key1, modify) {
  return update(object, key1, function(value1) {
    return update0(value1, modify);
  });
}

function update0(value, modify) {
  return modify(value);
}

/// Page 374

function updateX(object, depth, key1, key2, key3, modify) {
  return update(object, key1, function(value1) {
    return updateX(value1, depth-1, key2, key3, modify);
  });
}

//// Using keys array argument

function updateX(object, keys, modify) {
  var key1 = keys[0];
  var restOfKeys = drop_first(keys);
  return update(object, key1, function(value1) {
    return updateX(value1, restOfKeys, modify);
  });
}

/// Page 375

//// Handling 0

function updateX(object, keys, modify) {
  if(keys.length === 0)
    return modify(object);
  var key1 = keys[0];
  var restOfKeys = drop_first(keys);
  return update(object, key1, function(value1) {
    return updateX(value1, restOfKeys, modify);
  });
}

/// Page 376

function nestedUpdate(object, keys, modify) {
  if(keys.length === 0)
    return modify(object);
  var key1 = keys[0];
  var restOfKeys = drop_first(keys);
  return update(object, key1, function(value1) {
    return nestedUpdate(value1, restOfKeys, modify);
  });
}