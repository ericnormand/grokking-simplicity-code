function countAllPurchases(customers) {
  var total = 0;
  forEach(customers, function(customer) {
    total = total + customer.purchases.length;
  });
  return total;
}

function concatenateArrays(arrays) {
  var result = [];
  forEach(arrays, function(array) {
    result = result.concat(array);
  });
  return result;
}

function customersPerCity(customers) {
  var cities = {};
  forEach(customers, function(customer) {
    cities[customer.address.city] += 1;
  });
  return cities;
}

function biggestPurchase(purchases) {
  var biggest = {total:0};
  forEach(purchases, function(purchase) {
    biggest = biggest.total > purchase.total ? biggest : purchase;
  });
  return total;
}

/// Replaced with callback

function countAllPurchases(customers) {
  return reduce( customers, 0, function(total, customer) {
    return total + customer.purchase.length;
  });
}

function reduce(array, init, f) {
  var accum = init;
  forEach(array, function(element) {
    accum = f(accum, element);
  });
  return accum;
}