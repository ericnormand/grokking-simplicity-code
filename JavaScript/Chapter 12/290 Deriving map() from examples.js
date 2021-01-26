function emailsForCustomers(customers, goods, bests) {
  var emails = [];
  for(var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    var email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  }
  return emails;
}

function biggestPurchasePerCustomer(customers) {
  var purchases = [];
  for(var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    var purchase = biggestPurchase(customer);
    purchases.push(purchase);
  }
  return purchases;
}

function customerFullNames(customers) {
  var fullNames = [];
  for(var i = 0; i < customers.length; i++) {
    var cust = customers[i];
    var name = cust.firstName + " " + cust.lastName;
    fullNames.push(name);
  }
  return fullNames;
}

function customerCities(customers) {
  var cities = [];
  for(var i = 0; i < customers.length; i++) {
    var customer = customers[i];
    var city = customer.address.city;
    cities.push(city);
  }
  return cities;
}

/// Replaced with callback

function emailsForCustomers(customers, goods, bests) {
  return map(customers, function(customer) {
    return emailForCustomer(customer, goods, bests);
  });
}

function map(array, f) {
  var newArray = [];
  forEach(array, function(element) {
    newArray.push(f(element));
  });
  return newArray;
}