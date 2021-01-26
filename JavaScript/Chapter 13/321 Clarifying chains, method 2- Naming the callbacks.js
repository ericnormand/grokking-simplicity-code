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

/// extracted and named callbacks

function biggestPurchasesBestCustomers(customers) {
  var bestCustomers    = filter(customers, isGoodCustomer);
  var biggestPurchases = map(bestCustomers, getBiggestPurchase);
  return biggestPurchases;
}

function isGoodCustomer(customer) {
  return customer.purchases.length >= 3;
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, {total: 0}, getPurchaseTotal);
}

function getPurchaseTotal(purchase) {
  return purchase.total;
}