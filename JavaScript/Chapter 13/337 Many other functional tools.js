/// pluck()

function pluck(array, field) {
  return map(array, function(object) {
    return object[field];
  });
}

//// Usage

var prices = pluck(products, 'price');

//// Variation

function invokeMap(array, method) {
  return map(array, function(object) {
    return object[method]();
  });
}

/// concat()

function concat(arrays) {
  var ret = [];
  forEach(arrays, function(array) {
    forEach(array, function(element) {
      ret.push(element);
    });
  });
  return ret;
}

//// Usage

var purchaseArrays = pluck(customers, "purchases");
var allPurchases = concat(purchaseArrays);

//// Variation

function concatMap(array, f) {
  return concat(map(array, f));
}

/// frequenciesBy() and groupBy()

function frequenciesBy(array, f) {
  var ret = {};
  forEach(array, function(element) {
    var key = f(element);
    if(ret[key]) ret[key] += 1;
    else ret[key] = 1;
  });
  return ret;
}

function groupBy(array, f) {
  var ret = {};
  forEach(array, function(element) {
    var key = f(element);
    if(ret[key]) ret[key].push(element);
    else ret[key] = [element];
  });
  return ret;
}

//// Usage

var howMany = frequenciesBy(products, function(p) {
  return p.type;
});

var groups = groupBy(range(0, 10), isEven);