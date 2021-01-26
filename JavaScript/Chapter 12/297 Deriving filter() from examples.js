function selectBestCustomers(customers) {
  var newArray = [];
  forEach(customers, function(customer) {
    if(customer.purchases.length >= 3)
      newArray.push(customer);
  });
  return newArray;
}

function selectCustomersAfter(customers, date) {
  var newArray = [];
  forEach(customers, function(customer) {
    if(customer.signupDate > date)
      newArray.push(customer);
  });
  return newArray;
}

function selectCustomersBefore(customers, date) {
  var newArray = [];
  forEach(customers, function(customer) {
    if(customer.signupDate < date)
      newArray.push(customer);
  });
  return newArray;
}

function singlePurchaseCustomers(customers) {
  var newArray = [];
  forEach(customers, function(customer) {
    if(customer.purchases.length === 1)
      newArray.push(customer);
  });
  return newArray;
}

/// Replaced with callback

function selectBestCustomers(customers) {
  return filter(customers, function(customer) {
    return customer.purchases.length >= 3;
  });
}

function filter(array, f) {
  var newArray = [];
  forEach(array, function(element) {
    if(f(element))
      newArray.push(element);
  });
  return newArray;
}