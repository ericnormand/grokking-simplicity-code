/// Two map() steps in a row

var names = map(customers, getFullName);
var nameLengths = map(names, stringLength);

/// Equivalent as a single map() step

var nameLengths = map(customers, function(customer) {
  return stringLength(getFullName(customer));
});

/// Two filter() steps in a row

var goodCustomers = filter(customers, isGoodCustomer);
var withAddresses = filter(goodCustomers, hasAddress);

/// Equivalent as a single filter() step

var withAddresses = filter(customers, function(customer) {
  return isGoodCustomer(customer) && hasAddress(customer);
});

/// map() step followed by reduce() step

var purchaseTotals = map(purchases, getPurchaseTotal);
var purchaseSum = reduce(purchaseTotals, 0, plus);

/// Equivalent as a single reduce() step

var purchaseSum = reduce(purchases, 0, function(total, purchase) {
  return total + getPurchaseTotal(purchase);
});