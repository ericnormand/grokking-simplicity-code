function averagePurchaseTotals(customers) {
  return map(customers, function(customer) {
    var purchaseTotals = map(customer.purchases, function(purchase) {
      return purchase.total;
    });
    return average(purchaseTotals);
  });
}