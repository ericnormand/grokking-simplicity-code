function map(array, f) {
  return reduce(array, [], function(ret, item) {
    return ret.concat([f(item)]);
  });
}

function map(array, f) {
  return reduce(array, [], function(ret, item) {
    ret.push(item);
    return ret;
  });
}

function filter(array, f) {
  return reduce(array, [], function(ret, item) {
    if(f(item)) return ret.concat([item]);
    else        return ret;
  });
}

function filter(array, f) {
  return reduce(array, [], function(ret, item) {
    if(f(item))
      ret.push(item);
    return ret;
  });
}