function countAllPurchases(customers) {
  var total = 0;
  forEach(customers, function(customer) {
    total = total + customer.purchases.length;
  });
  return total;
}