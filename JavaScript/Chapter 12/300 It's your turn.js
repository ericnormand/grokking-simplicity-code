var testGroup = filter(customers, function(customer) {
  return customer.id % 3 === 0;
});

var nonTestGroup = filter(customers, function(customer) {
  return customer.id % 3 !== 0;
});