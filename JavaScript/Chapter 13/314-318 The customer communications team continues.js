// Page 315

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = filter(customers, function(customer) {
    return customer.purchases.length >= 3;
  });
  var biggestPurchases = map(bestCustomers, function(customer) {
    return //...;
  });
}

// Page 316

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = filter(customers, function(customer) {
    return customer.purchases.length >= 3;
  });
  var biggestPurchases = map(bestCustomers, function(customer) {
    return reduce(customer.purchases, {total: 0}, function(biggestSoFar, purchase) {
      if(biggestSoFar.total > purchase.total)
        return biggestSoFar;
      else
        return purchase;
    });
  });
  return biggesetPurchases;
}

// Page 317

/// Find biggest purchase

reduce(customer.purchases, {total: 0}, function(biggestSoFar, purchase) {
  if(biggestSoFar.total > purchase.total)
    return biggestSoFar;
  else
    return purchase;
});

/// Find biggest number

reduce(numbers, Number.MIN_VALUE, function(m, n) {
  if(m > n)
    return m;
  else
    return n;
});

/// With callback extracted

maxKey(customer.purchases, {total: 0}, function(purchase) { return purchase.total; });

function maxKey(array, init, f) {
  return reduce(array, init, function(biggestSoFar, element) {
    if(f(biggestSoFar) > f(element)) 
      return biggestSoFar;
    else
      return element;
  });
}

// Page 318

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers = filter(customers, function(customer) {
    return customer.purchases.length >= 3;
  });
  var biggestPurchases = map(bestCustomers, function(customer) {
    return maxKey(customer.purchases, {total: 0}, function(purchase) {
      return purchase.total;
    });
  });
  return biggestPurchases;
}