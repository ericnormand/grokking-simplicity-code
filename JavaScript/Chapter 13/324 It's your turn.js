function bigSpenders(customers) {
  var withBigPurchases     = filter(customers, hasBigPurchase);
  var with2OrMorePurchases = filter(withBigPurchases, has2OrMorePurchases);
  return with2OrMorePurchases;
}

function hasBigPurchase(customer) {
  return filter(customer.purchases, isBigPurchase).length > 0;
}

function isBigPurchase(purchase) {
  return purchase.total > 100;
}

function has2OrMorePurchases(customer) {
  return customer.purchases.length >= 2;
}