function selectBestCustomers(customers) {
  var newArray = [];
  forEach(customers, function(customer) {
    if(customer.purchases.length >= 3)
      newArray.push(customer);
  });
  return newArray;
}