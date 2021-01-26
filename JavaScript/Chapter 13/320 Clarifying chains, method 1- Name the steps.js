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

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers    = selectBestCustomers(customers);
  var biggestPurchases = getBiggestPurchases(bestCustomers);
  return biggestPurchases;
}

function selectBestCustomers(customers) {
  return filter(customers, function(customer) {
    return customer.purchases.length >= 3;
  });
}

function getBiggestPurchases(customers) {
  return map(customers, getBiggestPurchase);
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, {total: 0}, function(purchase) {
    return purchase.total;
  });
}